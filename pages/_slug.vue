<template>
  <div class="flex flex-col overflow-x-hidden">
    <div v-for="(section,i) in page.section" :key="i">
      <component :is="'main-' + section.component" v-bind="section" />
    </div>
  </div>
</template>

<script>
import { replaceAll } from '~/utils/helpers'
export default {
  async asyncData ({ $content, app, params, route, error }) {
    let slug = params.slug || null
    if (route.name === 'index') {
      slug = 'homepage'
    }
    const thepage = await $content('pages')
      .where({
        slug
      })
      .fetch()
      .catch(() => {
        return error({ statusCode: 404, message: 'Page not found' })
      })
    const page = thepage[0]
    if (!page) { return error({ statusCode: 404, message: 'Page not found' }) }

    return {
      page: replaceAll(page, 'static/', '')
    }
  }
}
</script>
