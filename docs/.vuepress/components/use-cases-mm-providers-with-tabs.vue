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
import merchantPaymentsTab from './use-cases-tabs/mobile-money-providers/merchant-payments.vue';
import disbursementsTab from './use-cases-tabs/mobile-money-providers/disbursements.vue';
import internationalTransfersTab from './use-cases-tabs/mobile-money-providers/international-transfers.vue';
import p2pTransfersCaseTab from './use-cases-tabs/mobile-money-providers/p2p-transfers.vue';
import recurringPaymentsTab from './use-cases-tabs/mobile-money-providers/recurring-payments.vue';
import accountLinkingTab from './use-cases-tabs/mobile-money-providers/account-linking.vue';
import billPaymentsTab from './use-cases-tabs/mobile-money-providers/bill-payments.vue';
import agentServicesTab from './use-cases-tabs/mobile-money-providers/agent-services.vue';

const tabs = {
  merchantPaymentsTab,
  disbursementsTab,
  internationalTransfersTab,
  p2pTransfersCaseTab,
  recurringPaymentsTab,
  accountLinkingTab,
  billPaymentsTab,
  agentServicesTab,
};

export default {
  name: 'use-cases-with-tabs',

  components: tabs,

  props: [
    'defaultTab',
  ],

  data() {
    return {
      tabs: tabs,
      activeTabName: '',
    }
  },
  
  created() {
    this.setStartActiveTab();
  },
  
  methods: {
    handleTabSwitch(tabName) {
      this.activeTabName = tabName;
    },

    getTabTitle(tab) {
      return tab.data().tabTitle;
    },

    setStartActiveTab() {
      this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[this.defaultTab ? this.defaultTab -1 : 0]}`]);
    }
  }
};
</script>
