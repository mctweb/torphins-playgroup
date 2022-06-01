<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="flex w-full relative lg:w-1/2" :class="[flip ? 'pl-12 lg:order-2' : 'pr-12']">
      <div v-if="image" class=" bg-gray-300 shadow-xl w-full min-h-72 z-3 relative overflow-hidden" :class="[ flip ? 'rounded-tl' : 'rounded-tr']">
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
      <div class="inset-0 z-0 absolute">
        <CircleDec color="blue" :flip="flip" />
        <CircleDec stripes :flip="flip" />
      </div>
      <div class=" z-5 absolute" :class="[flip ? 'br' : 'bl']">
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
      <Markdown :body="title" type="heading" />
      <Markdown :body="body" />
      <div v-for="(button,index) in buttons" :key="index" class="mt-6">
        <ButtonInternal v-if="button.page" v-bind="button" size="large">
          {{ button.text }}
        </ButtonInternal>
      </div>
    </div>
  </section>
</template>

<script>
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
  }

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
