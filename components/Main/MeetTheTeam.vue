<template>
  <div id="Meet The Team" class="flex flex-wrap bg-red-500 gap-6 justify-center">
    <TeamMember v-for="(member, index) in team" :key="index" v-bind="member" class="h-auto w-full p-6 md:p-8 md:w-1/3 lg:p-12 lg:w-2/7 " />
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
