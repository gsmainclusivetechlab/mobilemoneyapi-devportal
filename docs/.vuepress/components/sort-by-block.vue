<template>
  <div class="sort-by-options">
    <button
        class="sort-by-options__button"
        type="button"
        v-for="item of values"
        :key="item"
        :class="{'sort-by-options__button--active': item === value}"
        @click="$emit('input', item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "sort-by-block",

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      values: [
          'Newest',
          'Oldest',
          'Active',
          'Inactive',
          'Blocked'
      ]
    }
  }
}
</script>

<style scoped>

</style>
