<template>
  <div class="use-case-tab tabs__item tabs__item--active">
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSection',
  created() {
    console.log('created')
  }
};
</script>
