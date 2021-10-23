<template>
  <TabSection :isActive="isActive">
    tab content will be here (1)
  </TabSection>
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
