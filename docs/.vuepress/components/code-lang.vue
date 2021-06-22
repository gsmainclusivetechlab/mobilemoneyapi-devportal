<template>
  <div class="lang-code-box" v-show="$parent.activeLanguage === title">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'code-language',
  props: {
    title: {
      type: String,
    },
    active: {
      Boolean,
    }
  },
}
</script>