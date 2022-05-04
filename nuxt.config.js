import siteMeta from './utils/meta'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Torphins Playgroup',
    titleTemplate: '%s - Torphins Playgroup',
    ...siteMeta()
    // script: [
    //   {
    //     type: 'module',
    //     src:
    //       'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=676264397070170&autoLogAppEvents=1'
    //   }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-agile'
    // { src: '~/plugins/vue-facebook.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true
    // ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  }
}
