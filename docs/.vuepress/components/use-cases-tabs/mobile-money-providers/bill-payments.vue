<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
      tab content will be here (7)
    </div>
  </div>
</template>

<script>
export default {
  name: 'bill-payments-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'Bill Payments', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
