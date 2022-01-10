<template>
  <span class="icon-spinner" :class="{'icon-spinner--table': table}"></span>
</template>

<script>
export default {
  name: 'spinner-component',
  props: {
    table: {
      type: Boolean,
      default: false
    }
  }
};
</script>
