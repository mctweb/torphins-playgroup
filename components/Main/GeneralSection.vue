<template>
  <MainBox v-bind="$props" :id="createId(title)" />
</template>

<script>
import { createId } from '~/utils/helpers'

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
    buttons: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: ''
    },
    flip: {
      type: Boolean,
      default: false
    }
  },
  methods: { createId }
}
</script>
