<template>
  <div class="flex flex-col overflow-x-hidden">
    <div v-for="(section,i) in page.section" :key="i" class="relative">
      <component :is="'main-' + section.type" v-bind="section" :icon="icons[i]" />
    </div>
  </div>
</template>

<script>
import { replaceAll, icons } from '~/utils/helpers'
import meta from '~/utils/meta'
export default {
  async asyncData ({ $content, app, params, route, error }) {
    let slug = params.slug.replace(/\s+/g, '-').toLowerCase() || null
    if (route.name === 'index' || route.name === '/') {
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
    if (!thepage.length) { return error({ statusCode: 404, message: 'Page not found' }) }
    const page = thepage[0]

    return { page: replaceAll(page, 'static/', '') }
  },
  head () {
    return {
      ...meta({
        title: this.page.title,
        description: this.page.brief,
        url: this.$route.path,
        image: this.page.metaimage
      })
    }
  },
  computed: {
    icons () {
      if (!this.page || !this.page.section.length) { return }
      let allIcons = icons

      while (this.page.section.length > allIcons.length) {
        allIcons = allIcons.concat(allIcons)
      }
      return allIcons
    }
  },
}
</script>
