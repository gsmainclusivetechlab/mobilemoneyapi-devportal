<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
      tab content will be here (5)
    </div>
  </div>
</template>

<script>
export default {
  name: 'recurring-payments-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'Recurring Payments', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
