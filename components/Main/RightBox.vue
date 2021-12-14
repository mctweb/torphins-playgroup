<template>
  <section>
    RightBox
    <Markdown :body="title" type="heading" />
    <Markdown :body="body" />
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
