<template>
  <MainBox v-bind="$props" right />
</template>

<script>
import props from '~/utils/props'
export default {
  props: {
    ...props
  }
}
</script>
