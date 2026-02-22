const fs = require('fs');
const axios = require('./vendor/axios.min.js');
const { execSync } = require('child_process');

// Чтение конфигурации из config.json
const params = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const { swaggerUrl, outputFile, outputPath, rmMethodPrefix } = params;

async function generateApiFromSwagger(swaggerUrl, outputFile, outputPath) {
  try {
    console.log('Получение схемы Swagger...');
    const response = await axios.get(swaggerUrl);
    const swaggerSchema = response.data;

    console.log('Генерация типов TypeScript...');
    // Проверка и создание выходной директории
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    const typesOutputFile = `${outputPath}${outputFile.replace('.ts', '.types.ts')}`;

    try {
      execSync(`npx openapi-typescript ${swaggerUrl} -o ${typesOutputFile}`);
      console.log(`Типы успешно сгенерированы с помощью CLI`);
    } catch (cliError) {
      console.log('Переход к программной генерации...');
    }

    console.log('Генерация методов API...');
    let apiMethods = `// Автосгенерированный клиент API\n`;
    apiMethods += `// Сгенерировано из ${swaggerUrl}\n\n`;
    apiMethods += `import type { paths } from './${outputFile.replace('.ts', '')}.types';\n`;
    apiMethods += `export const apiMethods = (options?: any) => {\n`;
    apiMethods += `  return {\n`;

    const groups = {};

    if (!swaggerSchema.paths) {
      throw new Error('В схеме Swagger не найдены пути');
    }

    // Создаем группы на основе тегов
    for (const [path, pathItem] of Object.entries(swaggerSchema.paths)) {
      if (!pathItem) continue;

      for (const method of ['get', 'post', 'put', 'patch', 'delete']) {
        const operation = pathItem[method];
        if (!operation) continue;

        // Получаем теги операции или используем дефолтную группу
        const tags = operation.tags || ['default'];
        const groupName = tags[0]; // Берем первый тег как основную группу

        if (!groups[groupName]) {
          groups[groupName] = [];
        }

        // Генерация имени метода
        let methodName = operation.operationId;
        if (!methodName) {
          // Если operationId не указан, генерируем имя на основе пути и метода
          const pathParts = path.split('/').filter(p => p && !p.startsWith('{'));
          methodName = method.toLowerCase() + 
            pathParts.map(part => 
              part.split(/[-_]/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join('')
            ).join('');
        }

        // Очистка имени метода
        methodName = methodName
          .replace(/[^a-zA-Z0-9_$]/g, '_')
          .replace(/^[0-9]/, '_$&');

        // Определение параметров
        const pathParams = (path.match(/{([^}]+)}/g) || []).map(p => p.replace(/{|}/g, ''));
        const hasPathParams = pathParams.length > 0;
        const hasQueryParams = operation.parameters?.some(p => p.in === 'query');
        const hasBody = ['post', 'put', 'patch'].includes(method) && operation.requestBody;

        // Определение типа контента для запроса и ответа
        let requestContentType = 'application/json';
        let responseContentType = 'application/json';

        if (hasBody) {
          const contentTypes = operation.requestBody?.content ? Object.keys(operation.requestBody.content) : [];
          requestContentType = contentTypes.length > 0 ? contentTypes[0] : 'application/json';
        }

        const excludeStatusCodeStarts = ['4', '5']; // 400, 500 exclude error status codes;
        const successResponse = Object.entries(operation.responses || {})
          .find(([code]) => !excludeStatusCodeStarts.includes(String(code)[0])) || [];
        const responseContentTypes = successResponse[1]?.content
          ? Object.keys(successResponse[1].content)
          : [];
        responseContentType = responseContentTypes.length > 0 ? responseContentTypes[0] : 'application/json';

        // Генерация сигнатуры метода
        let apiLine = '';
        const responseCode = successResponse[0] || '200';

        // Безопасное определение типа ответа
        let responseType = 'unknown';
        if (successResponse[1]?.content) {
          const contentTypes = Object.keys(successResponse[1].content);
          if (contentTypes.length > 0) {
            responseType = `paths['${path}']['${method}']['responses']['${responseCode}']['content']['${contentTypes[0]}']`;
          } else {
            responseType = 'void';
          }
        } else if (successResponse[1]) {
          responseType = `paths['${path}']['${method}']['responses']['${responseCode}']`;
        } else {
          responseType = 'void';
        }

        if (!hasPathParams && !hasQueryParams && !hasBody) {
          apiLine = `${methodName}: () => useApi<${responseType}>('${path}', { method: '${method.toUpperCase()}', ...options }),`;
        } else if (method === 'delete' && pathParams.length === 1 && pathParams[0] === 'id') {
          apiLine = `${methodName}: (id: string | number) => useApi<void>(\`${path.replace('{id}', '${id}')}\`, { method: 'DELETE', ...options }),`;
        } else {
          const pathParamsStr = pathParams.map(p => `${p}: string | number`).join(', ');
          const pathWithParams = pathParams.reduce((acc, param) =>
            acc.replace(`{${param}}`, `\${${param}}`), path);

          if (hasBody) {
            let bodyType = 'unknown';
            if (operation.requestBody?.content) {
              const contentTypes = Object.keys(operation.requestBody.content);
              if (contentTypes.length > 0) {
                bodyType = `paths['${path}']['${method}']['requestBody']['content']['${contentTypes[0]}']`;
              }
            }

            const isMultipart = requestContentType === 'multipart/form-data';
            const bodyParam = isMultipart ? 'formData' : 'body';

            if (hasQueryParams) {
              const queryParamsType = operation.parameters?.some(p => p.in === 'query')
                ? `paths['${path}']['${method}']['parameters']['query']`
                : 'Record<string, unknown>';
              apiLine = `${methodName}: (${pathParamsStr ? pathParamsStr + ', ' : ''}${bodyParam}: ${bodyType}, query?: ${queryParamsType}) => ` +
                `useApi<${responseType}>(\`${pathWithParams}\`, { ` +
                `method: '${method.toUpperCase()}', ` +
                `${isMultipart ? 'formData' : 'body'}: ${bodyParam}, ` +
                `params: query, ...options }),`;
            } else {
              apiLine = `${methodName}: (${pathParamsStr ? pathParamsStr + ', ' : ''}${bodyParam}: ${bodyType}) => ` +
                `useApi<${responseType}>(\`${pathWithParams}\`, { ` +
                `method: '${method.toUpperCase()}', ` +
                `${isMultipart ? 'formData' : 'body'}: ${bodyParam}, ...options }),`;
            }
          } else if (hasQueryParams) {
            const queryParamsType = operation.parameters?.some(p => p.in === 'query')
              ? `paths['${path}']['${method}']['parameters']['query']`
              : 'Record<string, unknown>';
            apiLine = `${methodName}: (${pathParamsStr ? pathParamsStr + ', ' : ''}query?: ${queryParamsType}) => ` +
              `useApi<${responseType}>(\`${pathWithParams}\`, { method: '${method.toUpperCase()}', params: query, ...options }),`;
          } else {
            apiLine = `${methodName}: (${pathParamsStr}) => useApi<${responseType}>(\`${pathWithParams}\`, { method: '${method.toUpperCase()}', ...options }),`;
          }
        }

        const apiLineFormat = rmMethodPrefix ? apiLine.replace(`${groupName}_`, '') : apiLine;
        groups[groupName].push(`      ${apiLineFormat}`);
      }
    }

    // Формирование окончательного вывода с группировкой по тегам
    for (const [groupName, methods] of Object.entries(groups)) {
      const groupNameFormat = groupName
          .replace(/[^a-zA-Z0-9_$]/g, '_')
          .replace(/^[0-9]/, '_$&');

      apiMethods += `    ${groupNameFormat}: {\n${methods.join('\n')}\n    },\n`;
    }

    apiMethods += '  };\n';
    apiMethods += '};\n';

    fs.writeFileSync(`${outputPath}${outputFile}`, apiMethods);

    console.log(`Успешно сгенерировано:
      - Типы: ${typesOutputFile}
      - Методы API: ${outputPath}${outputFile}`
    );

  } catch (error) {
    console.error('Ошибка при генерации API:', error);
    process.exit(1);
  }
}

// Выполнение
generateApiFromSwagger(swaggerUrl, outputFile, outputPath).catch(console.error);