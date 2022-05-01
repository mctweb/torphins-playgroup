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
    @apply  text-red;
}
.paragraph[type="heading"] p{
    @apply font-black text-blue text-2xl lg:text-3xl xl:text-4xl;
}
.paragraph[type="heading"] p img{
    @apply mb-12;
}
.paragraph[type="heading"] strong,.paragraph[type="largeheading"] strong, .paragraph[type="hero"] strong, .paragraph[type="footer"] strong {
    @apply text-red;
}
.paragraph[type="largeheading"] p{
    @apply font-black text-blue mb-0 pb-0 text-3xl lg:text-5xl xl:text-6xl;
}
.paragraph[type="largeheading"] p strong{
    @apply font-black ;
}
.paragraph[type="hero"] p{
    @apply font-black text-blue text-2xl lg:text-3xl xl:text-4xl;
}

.paragraph[type="footer"] h3{
    @apply font-bold text-red text-right mb-0 pb-0;
}
.paragraph[type="footer"] p{
    @apply text-blue text-right;
}
.paragraph[type="footer"] a{
    @apply font-black;
}
.paragraph[type="footer"] a:hover{
    @apply text-red duration-150;
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
  @apply  pb-1;
}
</style>
