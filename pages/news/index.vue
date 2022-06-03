<template>
  <div class="flex flex-col overflow-x-hidden">
    <div v-for="(section,i) in page.section" :key="i" class="relative">
      <component :is="'main-' + section.type" v-bind="section" :icon="icons[i]" />
    </div>
    <section class="flex flex-wrap mx-auto max-w-7xl  relative items-center pb-32 ">
      <div v-for="(article, i) in articles" :key="i" class="mb-24">
        <ArticleCard v-bind="article" />
      </div>
    </section>
  </div>
</template>

<script>
import { replaceAll, icons } from '~/utils/helpers'
import meta from '~/utils/meta'
export default {
  async asyncData ({ $content, app, params, route, error }) {
    const thepage = await $content('pages')
      .where({
        slug: 'news'
      })

      .fetch()
      .catch(() => {
        return error({ statusCode: 404, message: 'Page not found' })
      })
    const page = thepage[0]

    const articles = await $content('news')
      .sortBy('createdAt', 'asc')
      .fetch()
      .then((articles) => {
        return articles.map(x => replaceAll(x, 'static/', ''))
      })
    return { page: replaceAll(page, 'static/', ''), articles }
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
  }
}
</script>
