<template>
  <div v-if="body" class="subpixel-antialiased paragraph" v-html="$md.render(body)" />
</template>
<script>
export default {
  props: {
    body: {
      type: String,
      default: ''
    }

  }
}
</script>
<style>

.paragraph a{
  @apply border-transparent border-b-2 hover:border-white;
}
.paragraph strong{
    @apply font-black;
}
.paragraph[type="heading"] p{
    @apply font-black text-blue text-2xl lg:text-3xl xl:text-4xl;
}
.paragraph[type="heading"] p img{
    @apply mb-12;
}
.paragraph[type="heading"] strong{
    @apply text-red;
}
.paragraph[type="hero"] p{
    @apply font-black text-blue text-2xl lg:text-3xl xl:text-4xl;
}
.paragraph[type="hero"] strong{
    @apply text-red;
}
.paragraph h1{
  @apply text-5xl;
}
.paragraph h2{
  @apply text-4xl;
}
.paragraph h3{
  @apply text-3xl;
}
.paragraph h4{
  @apply text-2xl;
}
.paragraph h5{
  @apply text-xl;
}
.paragraph p{
  @apply text-lg pb-3;
}
.paragraph ul{
  @apply list-disc py-6 pl-6;
}
.paragraph ul li{
  @apply pb-3 pl-2;
}
</style>
