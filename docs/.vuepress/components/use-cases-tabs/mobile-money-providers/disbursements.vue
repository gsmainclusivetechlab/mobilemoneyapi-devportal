<template>
  <TabSection :isActive="isActive">
    tab content will be here (2)
  </TabSection>
</template>

<script>
export default {
  name: 'disbursements-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'Disbursements', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
