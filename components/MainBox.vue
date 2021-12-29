<template>
  <section class="max-w-7xl mx-auto py-32 relative flex flex-wrap items-center">
    <div class="w-1/2 relative flex" :class="[right ? 'pl-12 order-2' : 'pr-12']">
      <div class="w-full bg-gray-300 h-full min-h-72 z-10 relative shadow-xl" :class="[ right ? 'rounded-tl' : 'rounded-tr']" />
      <div class="z-1 absolute inset-0">
        <CircleDec color="blue" />
        <CircleDec stripes />
      </div>
    </div>
    <div class="relative z-10 flex-1" :class="[right ? 'pr-12 order-1' : 'pl-12']">
      <Markdown :body="title" type="heading" />
      <Markdown :body="body" />
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
