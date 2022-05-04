<template>
  <div id="Meet The Team" class="flex flex-wrap bg-red-500  justify-center">
    <TeamMember v-for="(member, index) in team" :key="index" v-bind="member" class="h-auto w-full p-6 lg:p-8 lg:w-1/2 xl:p-12 xl:w-1/3 " />
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
