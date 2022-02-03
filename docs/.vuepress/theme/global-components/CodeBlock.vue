<template>
  <div
      class="theme-code-block"
      :class="{ 'theme-code-block__active': active }"
  >
    <slot/>
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
  inject: {
    provideObject: {
      default: () => ({
        activeLanguage: '',
        activeMethodIndex: -1,
        activeCodeTabIndex: -1,
        heightOfCodeGroup: 200
      })
    }
  },
  mounted() {
    if (this.$parent && this.$parent.loadTabs) {
      this.$parent.loadTabs();
    }
    if (this.title === 'Code') {
      this.$parent.$emit('get-code-languages', this.$children.map(el => el.title));
    }
  }
};
</script>

<style scoped>
.theme-code-block {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

.theme-code-block__active {
  position: relative;
  top: auto;
  left: auto;
}

.theme-code-block > pre {
  background-color: orange;
}
</style>
