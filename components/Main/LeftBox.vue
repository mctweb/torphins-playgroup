<template>
  <MainBox v-bind="$props" />
</template>

<script>
import props from '~/utils/props'
export default {
  props: {
    ...props
  }
}
</script>
