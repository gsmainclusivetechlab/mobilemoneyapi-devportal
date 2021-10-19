<template>
  <div
    class="theme-code-block"
    :class="{ 'theme-code-block__active': active }"
  >
    <template v-if="title!=='Code'">
      <slot/>
    </template>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.$parent && this.$parent.loadTabs) {
      this.$parent.loadTabs()
    }
    if(this.title === 'Code') {
      this.$parent.$emit('get-code-languages', this.$children.map(el=>el.title))
    }
  }
}
</script>

<style scoped>
  .theme-code-block {
    display: none;
  }
  .theme-code-block__active {
    display: block;
  }
  .theme-code-block > pre {
    background-color: orange;
  }
</style>
