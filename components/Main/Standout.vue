<template>
  <section class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class="bg-white flex flex-wrap w-full p-12 items-center">
      <div class="flex-1">
        <Markdown :body="title" type="largeheading" />
        <Markdown :body="body" />
      </div>
      <div class="flex lg:w-1/2">
        <div v-for="(button,index) in buttons" :key="index" class="mt-6">
          <ButtonInternal :page="button.page" size="large">
            {{ button.text }}
          </ButtonInternal>
        </div>
      </div>
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
