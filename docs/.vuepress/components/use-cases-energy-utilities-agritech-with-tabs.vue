<template>
  <div class="use-cases-tabs-section tabs-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro">
        <h2 class="h2 section-title">Use cases</h2>
      </div>

      <div class="tabs-buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="`tab-button-${index}`"
          type="button"
          class="btn btn-bordered"
          :class="{ 
            'btn--accent': getTabTitle(tab) === activeTabName,
            'btn--inactive': getTabTitle(tab) !== activeTabName,
          }"
          @click="handleTabSwitch(getTabTitle(tab))"
        >
          {{ getTabTitle(tab) }}
        </button>
      </div>

      <div class="tabs-holder" v-for="(tab, index) in tabs" :key="`tab-${index}`">
        <component :is="tab" v-if="getTabTitle(tab) === activeTabName" :isActive="getTabTitle(tab) === activeTabName"/>
      </div>
    </div>
  </div>
</template>

<script>
import recurringPaymentsTab from './use-cases-tabs/mobile-money-providers/recurring-payments.vue';
import billPaymentsTab from './use-cases-tabs/mobile-money-providers/bill-payments.vue';

const tabs = {
  recurringPaymentsTab,
  billPaymentsTab,
};

export default {
  name: 'use-cases-energy-utilities-agritech-with-tabs',

  components: tabs,

  props: [
    'defaultTab',
  ],

  data: function() {
    return {
      tabs: tabs,
      activeTabName: '',
    }
  },
  
  created: function() {
    this.setStartActiveTab();
  },
  
  methods: {
    handleTabSwitch: function(tabName) {
      this.activeTabName = tabName;
    },

    getTabTitle : function(tab) {
      return tab.data().tabTitle;
    },

    setStartActiveTab: function() {
      this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[this.defaultTab ? this.defaultTab -1 : 0]}`]);
    }
  }
};
</script>
