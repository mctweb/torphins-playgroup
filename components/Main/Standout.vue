<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="bg-white flex flex-wrap w-full p-12 z-10 items-center relative">
      <div class="flex-1">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" />
      </div>
      <div class="flex flex-col w-full lg:w-1/2">
        <div v-for="(button,index) in buttons" :key="index" class="mt-6">
          <ButtonInternal :page="button.page" size="large">
            {{ button.text }}
          </ButtonInternal>
        </div>
      </div>
    </div>
    <div class="inset-0 z-0 absolute">
      <CircleDec
        color="blue"
        stripes
        :right="right"
        :left="!right"
        :min="200"
        :max="500"
      />
      <CircleDec :right="right" :left="!right" :min="100" :max="400" />
    </div>
  </section>
</template>
<script>
import props from '~/utils/props'
export default {
  props: {
    ...props
  }
}
</script>

<style>

</style>
