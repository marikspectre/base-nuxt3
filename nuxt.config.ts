// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'og:title', content: 'DES' },
        { name: 'og:description', content: 'Digital energy system' },
      ]
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // modules: [
  //   "nuxt-svgo"
  // ],

  modules: ["nuxt-svgo", "@nuxtjs/i18n", "nuxt-echarts", "@pinia/nuxt"],

  echarts: {
    renderer: ["svg", "canvas"],
    charts: ["BarChart", "LineChart", "PieChart"],
    components: ["DatasetComponent", "GridComponent", "TooltipComponent"],
    features: ["LabelLayout", "UniversalTransition"]
  },

  css: [
    "~/assets/styles/main.css",
    "~/assets/styles/fonts.css",
    "element-plus/dist/index.css"
  ],

  runtimeConfig: {
    public: {
      NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  ssr: false,

  devServer: {
    host: "*",
    port: 4040,
  },

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
    { path: "~/components/shared", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
  ],

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "uz",
      alwaysRedirect: true
    },
    locales: [
      {
        code: "uz",
        file: "uz-Latn-UZ/uz-Latn-UZ.json",
        language: "uz-Latn-UZ"
      },
      {
        code: "kril",
        file: "uz-Cyrl-UZ/uz-Cyrl-UZ.json",
        language: "uz-Cyrl-UZ"
      },
      { code: "ru", file: "ru-RU/ru-RU.json", language: "ru-RU" },
      { code: "en", file: "en/en.json", language: "en" }
    ],
    defaultLocale: "uz",
    langDir: "locales/"
  },

  plugins: [],

  imports: {
    autoImport: true
  },

  vite: {
    plugins: [
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: false, directives: true })
        ],
        dts: "components.d.ts"
      }),
      AutoImport({
        imports: ["vue"],
        resolvers: [ElementPlusResolver({ directives: true })],
        dts: "auto-imports.d.ts"
      }),
    ]
  },

  svgo: {
    componentPrefix: "icon",
    autoImportPath: "./assets/icons/",
    defaultImport: "component",
    svgoConfig: {
      multipass: false, // Отключаем многоходовую оптимизацию
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // Отключаем ВСЕ плагины оптимизации
              removeDoctype: false,
              removeXMLProcInst: false,
              removeComments: false,
              removeMetadata: false,
              removeEditorsNSData: false,
              cleanupIds: false,
              convertColors: false,
              convertPathData: false,
              convertTransform: false,
              removeUnknownsAndDefaults: false,
              removeNonInheritableGroupAttrs: false,
              removeUselessStrokeAndFill: false,
              removeUnusedNS: false,
              cleanupNumericValues: false,
              moveElemsAttrsToGroup: false,
              moveGroupAttrsToElems: false,
              collapseGroups: false,
              mergePaths: false,
              convertShapeToPath: false,
              sortAttrs: false,
              removeTitle: false,
              removeDesc: false,
              removeEmptyContainers: false,
              removeViewBox: false,
              cleanupEnableBackground: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              inlineStyles: false,
              minifyStyles: false
            }
          }
        }
      ]
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["../*"],
          "@themeConfig": ["../themeConfig.ts"],
          "@layouts/*": ["../@layouts/*"],
          "@layouts": ["../@layouts"],
          "@core/*": ["../@core/*"],
          "@core": ["../@core"],
          "@images/*": ["../assets/images/*"],
          "@styles/*": ["../assets/styles/*"],
          "@validators": ["../@core/utils/validators"],
          "@db/*": ["../server/fake-db/*"],
          "@api-utils/*": ["../server/utils/*"]
        }
      }
    }
  },

  compatibilityDate: "2025-11-07"
});
