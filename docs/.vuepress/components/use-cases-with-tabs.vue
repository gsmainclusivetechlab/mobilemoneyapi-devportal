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
          @click="hendleTabSwitch(getTabTitle(tab))"
        >
          {{ getTabTitle(tab) }}
        </button>
      </div>

      <div class="tabs-holder" v-for="(tab, index) in tabs" :key="`tab-${index}`">
        <transition name="fade">
          <component :is="tab" v-if="getTabTitle(tab) === activeTabName" :isActive="getTabTitle(tab) === activeTabName"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import merchantPaymentsCaseTab from './use-cases-tabs/merchant-payments-case-tab.vue';
import internationalTransfetTab from './use-cases-tabs/international-transfet-tab.vue';
import internationalTransfetTabCopy from './use-cases-tabs/merchant-payments-case-tab-copy.vue';

const tabs = {
  merchantPaymentsCaseTab,
  internationalTransfetTab,
  internationalTransfetTabCopy,
};

export default {
  name: 'use-cases-with-tabs',

  components: tabs,

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
    hendleTabSwitch: function(tabName) {
      this.activeTabName = tabName;
    },

    getTabTitle : function(tab) {
      return tab.data().tabTitle;
    },

    setStartActiveTab: function() {
      this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[1]}`]);
    }
  }
};
</script>
