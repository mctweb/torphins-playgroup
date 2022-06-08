<template>
  <footer class="bg-white border-blue border-t-4 w-full p-6 md:p-12 lg:p-24 xl:px-32">
    <img
      src="/avatars/all.svg"
      class="h-auto mx-auto w-full max-w-9xl pb-12 lg:pb-24"
      role="presentation"
      loading="lazy"
      width="1200"
      height="320"
    >
    <div id="Contact" class="flex flex-wrap mx-auto max-w-9xl items-center">
      <section class="flex flex-col font-black order-2 text-lg w-full py-6 lg:order-1 lg:text-2xl lg:w-1/2">
        <NuxtLink v-for="(link,i) in links" :key="i" :to="link.page" class="pb-2 duration-150  hover:text-red">
          {{ link.text }}
        </NuxtLink>
      </section>
      <section class="order-1 w-full lg:order-2 lg:w-1/2">
        <Markdown :body="body" type="footer" />
      </section>
    </div>
    <p class="text-sm text-center w-full pt-12">
      Copyright © {{ new Date().getFullYear() }} Torphins Playgroup. All rights reserved.
    </p>
    <div class="w-full justify-center flex mt-12 text-gray-700">
      <MCT />
    </div>
  </footer>
</template>

<script>
import { normalizeLinks } from '~/utils/helpers'
export default {

  data () {
    return {
      links: [],
      body: null
    }
  },
  async fetch () {
    const footer = await this.$content('settings/footer')
      .fetch()
    this.links = normalizeLinks(footer.links, 'page')
    this.body = footer.footertext
  }
}
</script>

<style>

</style>
