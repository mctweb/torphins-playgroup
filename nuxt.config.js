import siteMeta, { sitePWA } from './utils/meta'
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
    'nuxt-windicss',
    '@nuxt/image'
  ],

  image: {
    staticFilename: 'mct-web/images/[name]-[hash][ext]'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'

  ],
  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true
    // ]
  },

  sitemap: {
    hostname: 'https://torphinsplaygroup.co.uk',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const pages = await $content('pages')
        .only(['path'])
        .fetch()
      const articles = await $content('news').only(['path']).fetch()
      return [...pages, ...articles].map((file) => {
        const path = file.path.replace('/pages', '')
        console.log(path)
        return ['/homepage', 'homepage', '/'].includes(path) ? '' : path + '/'
      })
    }
  },
  generate: {
    fallback: '404.html'

  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa

  pwa: sitePWA,

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile']
  }
}
