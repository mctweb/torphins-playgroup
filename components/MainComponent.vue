<template>
  <div>
    <Markdown :body="title" type="heading" />
    <Markdown :body="body" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    component: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
