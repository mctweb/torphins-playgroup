<template>
  <section :id="createId(title)" class="flex flex-wrap mx-auto max-w-7xl pt-32 pb-12 relative items-center">
    <div class="flex w-full relative self-stretch lg:w-1/2" :class="[flip ? 'pl-12 lg:order-2' : 'pr-12']">
      <div v-if="image" class=" bg-gray-300 shadow-xl w-full min-h-72 z-3 relative overflow-hidden" :class="[ flip ? 'rounded-tl' : 'rounded-tr']">
        <nuxt-picture
          :img-attrs="{class:'h-full object-cover w-full'}"
          sizes="xs:400px sm:500px md:500px lg:700px xl:800px"
          :src="image"
          :alt="title"
          loading="lazy"
          quality="80"
          height="700"
          width="800"
          fit="cover"
        />
      </div>
      <div class="inset-0 z-0 absolute">
        <CircleDec color="blue" :flip="flip" />
        <CircleDec stripes :flip="flip" />
      </div>
      <div v-if="icon" class=" z-5 absolute" :class="[flip ? 'br' : 'bl']">
        <img
          :src="icon"
          class="h-auto w-32"
          role="presentation"
          loading="lazy"
          width="160"
          height="200"
        >
      </div>
    </div>
    <div class="w-full px-12 pt-12 z-10 relative lg:flex-1 lg:pt-0" :class="[flip ? 'lg:order-1' : '']">
      <Markdown :body="title" type="heading" class="animate-in animation-delay-1" />
      <Markdown :body="body" class="animate-in animation-delay-2" />
      <div v-for="(button,index) in buttons" :key="index" class="mt-6">
        <ButtonInternal v-if="button.page" v-bind="button" size="large">
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
.bl{
  bottom: -3em;
  left: -3em;
}
.br{
  bottom: -3em;
  right: -3em;
}

</style>
