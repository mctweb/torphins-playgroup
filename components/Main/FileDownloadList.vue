<template>
  <section :id="'Policies'" class="flex flex-wrap mx-auto  py-32  relative items-center">
    <div class="flex mx-12 w-full justify-center">
      <input v-model="searchTerm" type="text" class="bg-white border-red rounded-lg font-black mx-auto border-4 w-full max-w-2xl py-4 px-6 z-20 relative lg:text-xl" placeholder="Search Resources">
    </div>
    <transition-group tag="ul" class=" flex flex-wrap w-full p-12 z-10 gap-3 justify-center items-center relative" name="fade-up">
      <li v-for="{file, url, title} in filteredDownloads" :key="file || url" class="flex w-full md:w-auto">
        <ButtonInternal v-if="file || url" :url="file ? file : url" target="_blank" size="large" class="w-full">
          {{ title }}
        </ButtonInternal>
      </li>
    </transition-group>
    <div class="inset-0 z-0 absolute">
      <CircleDec
        color="blue"
        stripes

        :min="200"
        :max="500"
      />
      <CircleDec :min="100" :max="400" />
    </div>
  </section>
</template>
<script>
import { createId } from '~/utils/helpers'

export default {
  props: {
    downloads: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      searchTerm: null
    }
  },
  computed: {
    filteredDownloads () {
      return this.downloads.filter(this.filterName).sort((a, b) => {
        if (a.title < b.title) { return -1 }
        if (a.title > b.title) { return 1 }
        return 0
      })
    }
  },
  methods: {
    createId,
    filterName (x) {
      if (!this.searchTerm) { return true }
      if (!x.button && !x.title) { return false }
      if (x.button) { return x.button.toLowerCase().includes(this.searchTerm.toLowerCase()) }
      return x.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    }
  }
}
</script>

<style>

</style>
