<template>
  <NuxtLink :to="to" class="bg-blue rounded-lg flex flex-wrap font-black text-white py-4 px-6 duration-150 button justify-between items-center group hover:bg-red">
    <slot>Click here</slot>
    <IconPlus class="h-8 text-white ml-3 transform w-8 duration-500 icon group-hover:rotate-90" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      to: '/'
    }
  },
  mounted () {
    this.getPage(this.page)
  },
  methods: {
    async getPage (title) {
      const [page] = await this.$content('pages')
        .where({
          title
        })
        .only(['slug', 'title'])
        .fetch((a) => { return a })
        .catch(() => {
          return [{ slug: 'nono' }]
        })

      this.to = page.slug === 'homepage' ? '/' : page.slug
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
