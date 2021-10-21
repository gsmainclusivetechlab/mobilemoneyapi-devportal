<template>
  <div>
    <TabSection>
      <slot :name="current"></slot>
    </TabSection>
  </div>
</template>

<script>
import TabSection from "./TabSection";
export default {
  name: "TestComponent",
  components: {TabSection},
  props: [
      'current'
  ]
}
</script>

<style scoped>

</style>
