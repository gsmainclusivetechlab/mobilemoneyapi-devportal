<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
      tab content will be here (3)
    </div>
  </div>
</template>

<script>
export default {
  name: 'international-transfers-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'International Transfers', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
