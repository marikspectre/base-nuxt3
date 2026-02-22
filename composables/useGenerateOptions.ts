import { useI18n } from 'vue-i18n'

export function useGenerateOptions(data: any[], key?: string) {
  const { locale } = useI18n()

  return data.map(item => {
    const label = item.name[locale.value]
    const value = key ? item[key] : item.id

    return {
      label,
      value
    }
  })
}

export function useGenerateRoleSelectOptions(data: any[], key?: string) {
  const { locale } = useI18n()

  return data.map(item => {
    const label = item.name
    const value = item.id

    return {
      label,
      value
    }
  })
}

export function useGenerateRoleOptions(data: any[], key?: string) {

  return data.map(item => {
    const label = item.role
    const value = key ? item[key] : item.id

    return {
      label,
      value
    }
  })
}

export function useGenerateNamesOptions(data: any[], key?: string) {
  const { locale } = useI18n()

  return data.map(item => {
    const nameObj = item.names.find((name: { data: string, language: string }) => name.language === locale.value) || item.names[0] || {}
    const label = nameObj?.data
    const value = key ? item[key] : item.id

    return {
      label,
      value
    }
  })
}
export function useGenerateNamesLangOptions(data: any[], key?: string) {
  const { locale } = useI18n()

  return data.map(item => {
    const nameObj = item.names.find((name: { data: string, lang: string }) => name.lang === locale.value) || item.names[0] || {}
    const label = nameObj?.data
    const value = key ? item[key] : item.id

    return {
      label,
      value
    }
  })
}
