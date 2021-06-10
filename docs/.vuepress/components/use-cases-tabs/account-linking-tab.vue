<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
      Account Linking tab content will be here
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-linking-tab',
  props: [
    'isActive',
  ],

  data: function() {
    return {
      tabTitle: 'Account Linking', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  },
};
</script>
