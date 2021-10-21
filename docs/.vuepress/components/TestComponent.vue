<template>
  <div>
    <div v-for="item in 5">
      <slot :name="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestComponent"
}
</script>

<style scoped>

</style>
