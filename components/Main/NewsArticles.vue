<template>
  <section class="flex flex-wrap mx-auto max-w-7xl  py-24 relative items-center " :class="[isNewsPage ? 'pb-32' : 'py-32']">
    <div class="flex flex-wrap w-full px-12 pt-12 pb-6 z-10 relative items-center lg:flex-1 lg:pt-0">
      <div class="flex flex-col flex-1 mr-32">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" type="heading" />
      </div>

      <ButtonInternal v-if="$route.name !== 'news'" to="/news">
        View All Articles
      </ButtonInternal>
    </div>
    <div v-for="(article, i) in articles" :key="i" class="mt-12">
      <ArticleCard v-bind="article" />
    </div>
  </section>
</template>

<script>
import { replaceAll } from '~/utils/helpers'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      articles: [],
      isNewsPage: false
    }
  },
  async fetch () {
    this.articles = await this.$content('news')
      .limit(1)
      .fetch()
      .then((articles) => {
        return articles.map(x => replaceAll(x, 'static/', ''))
      })
  },

  created () {
    if (this.$route.name === 'news') {
      this.isNewsPage = true
    }
  }
}
</script>

<style scoped>
.bl{
  bottom: -3em;
  left: -3em;
}
.br{
  bottom: -3em;
  right: -3em;
}

</style>
