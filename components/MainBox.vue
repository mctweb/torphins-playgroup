<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="flex w-full relative lg:w-1/2" :class="[right ? 'pl-12 lg:order-2' : 'pr-12']">
      <div class="h-full bg-gray-300 shadow-xl w-full min-h-72 z-10 relative overflow-hidden" :class="[ right ? 'rounded-tl' : 'rounded-tr']">
        <img :src="image" :alt="title" class="h-full object-cover w-full">
      </div>
      <div class="inset-0 z-1 absolute">
        <CircleDec color="blue" :right="right" :left="!right" />
        <CircleDec stripes :right="right" :left="!right" />
      </div>
    </div>
    <div class="w-full px-12 pt-12 z-10 relative lg:flex-1 lg:pt-0" :class="[right ? 'lg:order-1' : '']">
      <Markdown :body="title" type="heading" />
      <Markdown :body="body" />
      <div v-for="(button,index) in buttons" :key="index" class="mt-6">
        <ButtonInternal :page="button.page" size="large">
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
