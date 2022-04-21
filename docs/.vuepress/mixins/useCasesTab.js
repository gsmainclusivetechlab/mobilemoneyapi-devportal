export default {
  created() {
    this.activeTabName = this.tabs.length ? this.tabs[0] : '';
    this.tabLinks = {
      'P2P Transfers': '/use-cases/p-2-p-transfers/',
      'Merchant Payments': '/use-cases/merchant-payments/',
      'Disbursements': '/use-cases/disbursements/',
      'International Transfers': '/use-cases/international-transfers/',
      'Recurring Payments': '/use-cases/recurring-payments/',
      'Account Linking': '/use-cases/account-linking/',
      'Bill Payments': '/use-cases/bill-payments/',
      'Agent Services': '/use-cases/agent-services/'
    };
  },

  methods: {
    handleTabSwitch(tabName) {
      this.activeTabName = tabName;
      this.$forceUpdate();
    },
    isActiveTab(title) {
      return title === this.activeTabName;
    },
    getActiveTab() {
      return this.tabLinks[this.activeTabName];
    }
  }
};
