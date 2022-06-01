<template>
  <button
    class="hamburger"
    :class="{open:open}"
    aria-label="Menu"
    :aria-expanded="open"
    @click="$emit('click')"
  >
    <span class="bar bar1" />
    <span class="bar bar2" />
    <span class="bar bar3" />
    <span class="bar bar4" />
    <span class="bar bar5" />
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.hamburger {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: relative;
    outline: none;
}
.hamburger:hover .bar{
    @apply bg-blue;
}
.hamburger .bar {
    @apply bg-red;
    padding: 0;
    width: 30px;
    height: 4px;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute;
}

.bar1 {
    top: 0;
}

.bar2,
.bar3 {
    top: 13.5px;
}

.bar3 {
    right: 0;
}

.bar4 {
    bottom: 0;
}

/* HAMBURGER 4 */

.hamburger .bar4 {
    top: 13.5px;
}

.hamburger .bar5 {
    bottom: 0px;
}

.hamburger .bar {
    transition: all 0.4s ease-in-out, transform 0.4s ease-in-out 0.4s;
}

.hamburger .bar2 {
    width: 1px;
    transform: rotate(90deg);
    left: 13.5px;
}

.hamburger .bar3 {
    width: 1px;
    left: 13.5px;

}

.open.hamburger > .bar1{
    top: 13.5px;
    background-color: transparent;
}

.open.hamburger > .bar2{
    left: 0px;
    width: 30px;
    transform: rotate(45deg);
}

.open.hamburger > .bar3{
    left: 0;
    width: 30px;
    transform: rotate(-45deg);
}

.open.hamburger > .bar4{
    background-color: transparent;
}

.open.hamburger > .bar5{
    bottom: 13.5px;
    background-color: transparent;
}

</style>
