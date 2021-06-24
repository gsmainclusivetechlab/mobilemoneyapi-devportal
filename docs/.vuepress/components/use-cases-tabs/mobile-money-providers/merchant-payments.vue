<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
      tab content will be here (1)
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchant-payments-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'Merchant Payments', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
