<template>
  <section :id="createId(title)" class="flex flex-wrap mx-auto max-w-7xl py-24 relative items-center ">
    <div class="bg-white flex flex-wrap w-full p-12 z-10 items-center relative">
      <div class="flex-1" :class="{'lg:order-2' : flip}">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" class="pt-6" />
      </div>
      <div v-if="file && button" class="flex flex-col w-full lg:w-1/3" :class="{ 'lg:order-1 pr-12' : flip}">
        <div class="mt-6">
          <ButtonInternal :url="file" target="_blank">
            {{ button }}
          </ButtonInternal>
          <!-- <ButtonInternal :id="button.id" :page="button.page" size="large">
            {{ button.text }}
          </ButtonInternal> -->
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
import { createId } from '~/utils/helpers'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    file: {
      type: String,
      default: ''
    },
    flip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    createId
  }
}
</script>

<style>

</style>
