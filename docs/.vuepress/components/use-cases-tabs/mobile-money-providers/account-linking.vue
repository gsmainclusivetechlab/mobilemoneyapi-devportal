<template>
  <TabSection :isActive="isActive">
    tab content will be here (6)
  </TabSection>
</template>

<script>
export default {
  name: 'account-linking-tab',
  props: [
    'isActive',
  ],

  data: function () {
    return {
      tabTitle: 'Account Linking', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
