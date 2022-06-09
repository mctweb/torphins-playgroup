export default function () {
  this.nuxt.hook('generate:done', (context) => {
    const routesToExclude = [
      '/admin',
      '/homepage'
    ] // Add any route you don't want in your sitemap. Potentially get this from an .env file.

    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter(route => !routesToExclude.includes(route) && route !== '/')

    this.nuxt.options.sitemap.routes = ['', ...routes]
  })
}
