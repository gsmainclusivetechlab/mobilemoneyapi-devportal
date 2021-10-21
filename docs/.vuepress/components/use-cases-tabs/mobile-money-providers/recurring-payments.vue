<template>
  <TabSection :isActive="isActive">
    tab content will be here (5)
  </TabSection>
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
