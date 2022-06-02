<template>
  <div class="flex flex-col overflow-x-hidden">
    <MainGeneralSection v-bind="{...page, image: page.metaimage, body: page.brief}" />
    <div class="bg-white mx-auto mb-32 w-full max-w-4xl py-24 px-12 lg:px-24">
      <p class="text-red mb-6">
        {{ page.created }}
      </p>
      <Markdown :body="page.description" />
      <ButtonInternal to="/news" class="mt-12">
        View All Articles
      </ButtonInternal>
    </div>
  </div>
</template>

<script>
import { replaceAll, humanizeDate } from '~/utils/helpers'
import meta from '~/utils/meta'
import ButtonInternal from '~/components/ButtonInternal.vue'
export default {
  components: { ButtonInternal },
  async asyncData ({ $content, app, params, route, error }) {
    // const slug = params.slug.replace(/\s+/g, '-').toLowerCase() || null
    const thepage = await $content('news').fetch((article) => {
      return article
    })
      .catch(() => {
        return error({ statusCode: 404, message: 'Page not found' })
      })
    const page = thepage[0]
    page.created = humanizeDate(page.createdAt)
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
  }
}
</script>
