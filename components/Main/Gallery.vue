<template>
  <client-only placeholder="Loading...">
    <agile>
      <div v-for="(image, i) in images" :key="i" class="slide">
        <img
          :src="image.image"
          :alt="image.title || null"
          class="h-screen object-cover w-full"
        >
      </div>
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
  @apply relative;
}
.agile .agile__actions{
  @apply mx-auto w-full bottom-0 absolute;
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
</style>
