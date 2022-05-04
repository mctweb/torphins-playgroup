<template>
  <nav class="bg-white bg-blend-screen  flex bg-opacity-50 text-blue w-full px-12 top-0 z-50 fixed backdrop-filter backdrop-blur-lg justify-between items-center">
    <header class="h-24 py-6">
      <img src="Logo-Text.svg" class="h-full w-auto">
    </header>
    <section class="flex  h-24 z-50 items-center justify-center lg:hidden">
      <NavigationIcon :open="navigationOpen" @click="navigationOpen = !navigationOpen" />
    </section>
    <section class=" bg-white flex font-black h-screen ml-auto w-full  transform origin-right top-0 bottom-0 left-0 duration-500 fixed md:text-lg lg:(bg-transparent flex h-auto text-xl w-auto block relative py-6 px-6) <lg:(p-12 flex-col items-center justify-center -translate-x-full) xl:text-2xl " :class="[navigationOpen ? '<lg:-translate-x-0' : '']">
      <NuxtLink v-for="(link,i) in links" :key="i" :to="link.page" class="px-3 duration-150  lg:px-4 xl:px-6 hover:text-red">
        {{ link.text }}
      </NuxtLink>
    </section>
  </nav>
</template>

<script>
import { normalizeLinks } from '~/utils/helpers'
export default {

  data () {
    return {
      links: [],
      navigationOpen: false
    }
  },
  async fetch () {
    if (this.links.length) { return }
    const navigation = await this.$content('settings/navigation').fetch()
    this.links = normalizeLinks(navigation.links, 'page')
  },
  head () {
    return {
      bodyAttrs: { class: this.navigationOpen ? 'overflow-hidden' : '' }
    }
  }
}
</script>

<style>

</style>
