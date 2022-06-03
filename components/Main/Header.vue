<template>
  <section :id="createId(title)" class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="flex order-2 w-full pl-12 relative md:w-1/2">
      <div class="rounded-tl h-full bg-gray-300 shadow-xl w-full min-h-72 z-10 relative overflow-hidden">
        <nuxt-picture
          :img-attrs="{class:'h-full object-cover w-full'}"
          :src="image"
          :alt="title"
          loading="lazy"
          quality="80"
          height="600"
          width="800"
          fit="cover"
        />
      </div>
      <div class="inset-0 z-1 absolute">
        <CircleDec color="blue" :min="400" :max="700" top flip />
        <CircleDec stripes :min="300" :max="600" top flip />
      </div>
    </div>
    <div class="order-1 w-full p-12 pr-12 z-10 relative md:flex-1">
      <Markdown :body="title" type="heading" class="animate-in" />
      <Markdown :body="body" type="heading" class="animate-in" />
      <div v-for="(button,index) in buttons" :key="index" class="">
        <ButtonInternal v-bind="button">
          {{ button.text }}
        </ButtonInternal>
      </div>
    </div>
  </section>
</template>

<script>
import { createId } from '~/utils/helpers'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: ''
    },
    flip: {
      type: Boolean,
      default: false
    }
  },
  methods: { createId }
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
