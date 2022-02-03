<template>
  <div class="view-link-block">
    <div v-if="blockText" class="block-text">{{ blockText }}</div>
    <a v-if="link && linkText" :href="link" class="external">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  name: 'view-link',
  props: [
    'blockText',
    'link',
    'linkText',
  ]
};
</script>
