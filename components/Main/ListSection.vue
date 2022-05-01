<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="bg-white flex flex-col flex-wrap w-full p-12 z-10 items-center relative">
      <!-- <div class="flex-1">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" class="pt-6" />
      </div> -->
      <div v-for="(listItem,i) in copiedList" :key="i" class="flex flex-wrap w-full p-12 z-10 items-center relative ">
        <button class="text-left" @click="toggle(i)">
          <Markdown :body="listItem.title" type="heading" />
        </button>
        <section class="transform duration-500" :class="[listItem.isOpen ? 'h-auto translate-y-0' : 'h-0 overflow-hidden translate-y-full' ]">
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
    toggle (i) {
      this.copiedList[i].isOpen = !this.copiedList[i].isOpen
    }
  }
}
</script>

<style>

</style>
