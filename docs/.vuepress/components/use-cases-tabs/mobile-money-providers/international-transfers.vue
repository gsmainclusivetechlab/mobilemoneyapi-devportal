<template>
  <TabSection :isActive="isActive">
    tab content will be here (3)
  </TabSection>
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
