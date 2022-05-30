<template>
  <div :id="'Meet The Team - ' + name" class="relative ">
    <div class="rounded-tr rounded-bl h-96 -mb-20 ml-6 w-64 z-20 overflow-hidden">
      <img :src="image" class="h-full object-cover w-full" :alt="name" loading="lazy">
    </div>
    <div class="bg-white rounded-tr flex flex-col p-6 pt-24 md:p-8 md:pt-24 lg:p-12 lg:pt-24">
      <h4 class="font-black text-red pt-6 pb-3 text-2xl">
        {{ name }}
      </h4>
      <Markdown :body="description" class="mb-auto flex-1" />
      <a :href="download" target="__blank" class="bg-blue rounded-lg font-black ml-auto flex-grow-0 mt-1 text-white py-4 px-6 duration-150 inline-block self-start hover:bg-red">Download Bio</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    download: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
