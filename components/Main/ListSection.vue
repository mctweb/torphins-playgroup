<template>
  <section class="flex flex-wrap mx-auto max-w-7xl pb-24 relative items-center ">
    <div class="bg-white flex flex-col flex-wrap w-full p-6 z-10 items-center relative md:p-8 lg:p-12">
      <div v-for="(listItem,i) in copiedList" :id="createId(listItem.title)" :key="i" class="flex flex-wrap w-full p-6 z-10 items-center relative ">
        <button class="bg-white rounded-lg flex outline-none text-left w-full p-3 duration-150 items-start group lg:p-6 hover:bg-gray-100 hover:text-red !focus:outline-none" :class="{ 'open' : listItem.isOpen}" @click="toggle(i)">
          <div class="flex-1">
            <Markdown :body="listItem.title" type="heading" class="hover:text-red" />
          </div>
          <transition name="rotate" mode="out-in">
            <IconMinus v-if="listItem.isOpen" class="h-12 text-red ml-3 py-2 transform w-12 duration-500 icon group-hover:text-blue " />
            <IconPlus v-else class="h-12 text-red ml-3 py-2 transform w-12 duration-500 icon group-hover:text-blue group-hover:rotate-90" />
          </transition>
        </button>
        <section class="transform px-3 duration-700 lg:px-6" :class="[listItem.isOpen ? 'accordian-open' : 'accordian-closed' ]">
          <Markdown :body="listItem.body" class="pt-6" />
        </section>
      </div>
    </div>
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
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      copiedList: []
    }
  },
  mounted () {
    this.copiedList = this.list.map((x) => {
      return {
        ...x,
        isOpen: false
      }
    })
  },
  methods: {
    createId,
    toggle (i) {
      this.copiedList[i].isOpen = !this.copiedList[i].isOpen
    }
  }
}
</script>

<style scoped>
.accordian-open{
  @apply h-auto opacity-100 translate-y-0;
}
.accordian-closed{
  @apply h-0 opacity-0 translate-y-full overflow-hidden;
}

::v-deep .paragraph[type="heading"] p:hover{
  @apply text-red duration-500;
}
::v-deep button.open .paragraph[type="heading"] p{
  @apply text-red duration-500;
}
</style>
