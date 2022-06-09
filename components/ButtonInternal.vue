<template>
  <NuxtLink v-if="page || to" :to="location" class="bg-blue rounded-lg flex flex-wrap font-black text-white leading-tighter py-4 px-6 duration-150 button justify-between items-center group md:flex-nowrap hover:bg-red">
    <span class="mr-3 inline-block"><slot>Click here</slot></span>
    <IconPlus class="ml-auto h-8 text-white transform w-8 duration-500 icon group-hover:rotate-90" />
  </NuxtLink>
  <a v-else-if="url" :href="url" target="_blank" class="bg-blue rounded-lg flex flex-wrap font-black text-white leading-tighter py-4 px-6 duration-150 button justify-between items-center group md:flex-nowrap hover:bg-red">
    <span class="mr-3 inline-block"><slot>Click here</slot></span>
    <IconPlus class="ml-auto h-8 text-white transform w-8 duration-500 icon group-hover:rotate-90" />
  </a>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ''
    },
    uid: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      location: '/'
    }
  },
  created () {
    this.getPage(this.page)
  },
  methods: {
    async getPage (title) {
      if (this.to) {
        this.location = this.to
        return
      }
      if (!title) { return }
      const [page] = await this.$content('pages')
        .where({
          title
        })
        .only(['slug', 'title'])
        .fetch((a) => { return a })
        .catch(() => {
          return [{ slug: '/' }]
        })
      const path = page.slug === 'homepage' ? '/' : '/' + page.slug
      const route = { path }
      if (this.uid) {
        route.hash = '#' + this.uid
      }
      this.location = route
    }
  }
}
</script>

<style scoped>
.button[size="large"]{
  @apply rounded-2xl text-xl py-5  lg:text-2xl;
}
.button[size="large"] .icon{
  @apply h-10 w-10;
}
</style>
