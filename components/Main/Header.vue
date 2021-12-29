<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="flex order-2 w-full pl-12 relative md:w-1/2">
      <div class="rounded-tl h-full bg-gray-300 shadow-xl w-full min-h-72 z-10 relative overflow-hidden">
        <img :src="image" :alt="title" class="h-auto object-cover w-full">
      </div>
      <div class="inset-0 z-1 absolute">
        <CircleDec color="blue" :min="400" :max="700" top right />
        <CircleDec stripes :min="300" :max="600" top right />
      </div>
    </div>
    <div class="order-1 w-full p-12 pr-12 z-10 relative md:flex-1">
      <Markdown :body="title" type="heading" />
      <Markdown :body="body" type="heading" />
      <div v-for="(button,index) in buttons" :key="index" class="">
        <ButtonInternal :page="button.page">
          {{ button.text }}
        </ButtonInternal>
      </div>
    </div>
  </section>
</template>

<script>
import props from '~/utils/props'
export default {
  props: {
    ...props,
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.rounded-tr{
  border-top-right-radius: 5rem;
}
.rounded-tl{
  border-top-left-radius: 5rem;
}
</style>
