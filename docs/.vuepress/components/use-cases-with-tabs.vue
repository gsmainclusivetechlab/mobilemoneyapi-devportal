<template>
  <div class="use-cases-tabs-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro">
        <h2 class="h2 section-title">Use cases</h2>
      </div>

      <div class="tabs-filter">
        <button
          v-for="(tab, index) in tabs"
          :key="`tab-button-${index}`"
          type="button"
          class="btn btn-bordered"
          :class="{ 'btn--accent': getTabTitle(tab) === activeTabName }"
          @click="hendleTabSwitch(getTabTitle(tab))"
        >
          {{ getTabTitle(tab) }}
        </button>
      </div>

      <div class="tab" v-for="(tab, index) in tabs" :key="`tab-${index}`">
        <component :is="tab" v-show="getTabTitle(tab) === activeTabName"/>
      </div>
    </div>
  </div>
</template>

<script>
import merchantPaymentsCaseTab from './use-cases-tabs/merchant-payments-case-tab.vue';
import internationalTransfetTab from './use-cases-tabs/international-transfet-tab.vue';

const tabs = {
  merchantPaymentsCaseTab,
  internationalTransfetTab,
};

export default {
  name: 'use-cases-with-tabs',

  components: tabs,

  data: function() {
    return {
      someData: 'some data',
      tabs: tabs,
      activeTabName: '',
    }
  },
  
  created: function() {
    console.log(this.tabs[`${Object.keys(this.tabs)[0]}`]);
    this.setStartActiveTab();
  },
  
  methods: {
    hendleTabSwitch: function(tabName) {
      console.log(tabName);
      this.activeTabName = tabName;
    },

    getTabTitle : function(tab) {
      return tab.data().tabTitle;
    },

    setStartActiveTab: function() {
      this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[0]}`]);
    }
  }
};
</script>
