<template>
  <div class="glossary-results__item" v-show="showElement">
    <slot name="title"></slot>
    <div class="glossary-results__item-text">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'glossary-item',
  data () {
    return {
      showElement: true
    }
  },
}
</script>
