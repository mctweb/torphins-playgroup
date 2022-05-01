<template>
  <section :id="title" class="flex flex-wrap mx-auto max-w-7xl py-32 relative items-center ">
    <div class=" flex flex-wrap w-full p-12 z-10 gap-12 justify-center items-center relative">
      <div v-for="({file, url, title},i) in downloads" :key="i" class="flex w-auto">
        <ButtonInternal v-if="file || url" :url="file ? file : url" target="_blank" size="large">
          {{ title }}
        </ButtonInternal>
      </div>
    </div>
    <div class="inset-0 z-0 absolute">
      <CircleDec
        color="blue"
        stripes

        :min="200"
        :max="500"
      />
      <CircleDec :min="100" :max="400" />
    </div>
  </section>
</template>
<script>

export default {
  props: {
    downloads: {
      type: Array,
      default: () => []
    }

  }
}
</script>

<style>

</style>
