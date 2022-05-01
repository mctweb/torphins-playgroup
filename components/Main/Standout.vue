<template>
  <section :id="title" class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="bg-white flex flex-wrap w-full p-12 z-10 items-center relative">
      <div class="flex-1">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" class="pt-6" />
      </div>
      <div v-if="buttons.length" class="flex flex-col w-full lg:w-1/2">
        <div v-for="(button,index) in buttons" :key="index" class="mt-6">
          <ButtonInternal :id="button.id" :page="button.page" size="large">
            {{ button.text }}
          </ButtonInternal>
        </div>
      </div>
    </div>
    <div class="inset-0 z-0 absolute">
      <CircleDec
        color="blue"
        stripes
        :flip="flip"

        :min="200"
        :max="500"
      />
      <CircleDec :flip="flip" :min="100" :max="400" />
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

<style>

</style>
