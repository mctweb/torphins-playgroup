import Vue from 'vue'

import VueGtag from 'vue-gtag'

export default ({ isDev, app }) => {
  if (!app.context.$config.gtag) { console.warm('Requires gtag') }
  if (!isDev) {
    Vue.use(
      VueGtag,
      {
        config: { id: app.context.$config.gtag },
        enabled: false

      },
      app.router
    )
  } else {
    console.log('Skipping GA in development')
  }
}
