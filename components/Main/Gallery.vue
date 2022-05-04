<template>
  <client-only placeholder="Loading...">
    <agile autoplay class="relative">
      <div v-for="(image, i) in images" :key="i" class="slide">
        <img
          :src="image.image"
          :alt="image.title || null"
          class="h-screen object-cover w-full"
        >
      </div>
      <template slot="prevButton">
        <IconArrow class="h-12 p-2 transform w-12 rotate-180" />
      </template>
      <template slot="nextButton">
        <IconArrow class="h-12 p-2 w-12" />
      </template>
    </agile>
  </client-only>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.agile__dots {
  @apply h-8;
}
.agile__dots li {
  @apply mx-3;
}
.agile{
  @apply relative overflow-hidden;
  height: 75vh;
}
.agile .agile__actions{
  @apply flex inset-0 absolute items-center;
}

.agile__dots{
  @apply flex w-full bottom-0 absolute justify-center;
}
.agile__dots .agile__dot button {
  @apply bg-white border-transparent border-2 h-4 mx-3 w-4;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
}
.agile__dots .agile__dot button:hover {
  @apply border-blue;
}

.agile__dots .agile__dot.agile__dot--current button{
  @apply border-red;
}
.agile__nav-button{
  @apply bg-red text-white duration-150 inline-block hover:bg-white hover:text-blue;
}

</style>
