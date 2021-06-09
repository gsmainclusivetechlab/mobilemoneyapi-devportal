<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    international-transfet tab
  </div>
</template>

<script>
export default {
  name: 'international-transfet-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'International Transfers', // required
    }
  },
};
</script>
