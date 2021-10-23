<template>
  <TabSection :isActive="isActive">
    tab content will be here (7)
  </TabSection>
</template>

<script>

import TabSection from "../../TabSection";

export default {
  name: 'bill-payments-tab',
  components: {TabSection},
  props: [
    'isActive',
  ],

  data: function () {
    return {
      tabTitle: 'Bill Payments', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
