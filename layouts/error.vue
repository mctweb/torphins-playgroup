<template>
  <div class="p-32 mx-auto min-h-screen flex justify-center flex-col">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <ButtonInternal to="/" class="mt-12 self-start">
      View Home page
    </ButtonInternal>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
