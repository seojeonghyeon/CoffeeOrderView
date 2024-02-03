import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'CoffeeOrderView',
    title: 'CoffeeOrderView',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/coffee.png' },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" },
      { rel: 'preconnect', href: "https://fonts.googleapis.com" },
      { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: 'true'}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/3aa8554714.js', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css', 
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  server: {
    port: 4000
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // CORS Middleware Configuration
  serverMiddleware: [
    { path: '/api', handler: '~/middleware/cors.js' }
  ],

  

  vuetify: {
    defaultAssets: {icons: 'fa'}
  },

  fontawesome: {
    icons:{
      solid:true,
      brands:true
    }
  }
}
