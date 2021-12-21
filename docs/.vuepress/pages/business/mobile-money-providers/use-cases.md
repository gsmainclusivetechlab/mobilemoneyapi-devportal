<template>
  <div class="use-cases-tabs-section tabs-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro">

## Use cases

</div>
      <div class="tabs-buttons">
        <button
            v-for="(tab, index) in tabs"
            :key="`tab-button-${index}`"
            type="button"
            class="btn btn-bordered"
            :class="{
            'btn--accent': isActiveTab(tab),
            'btn--inactive': !isActiveTab(tab),
          }"
            @click="handleTabSwitch(tab)"
        >
          {{ tab }}
        </button>
      </div>
      <div class="tabs-holder">
        <TabSection v-show="isActiveTab('P2P Transfers')">
!!!include(../../use-cases/p2p-transfers.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/p-2-p-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Merchant Payments')">
!!!include(../../use-cases/merchant-payments.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/merchant-payments/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Disbursements')">
!!!include(../../use-cases/disbursements.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/disbursements/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('International Transfers')">
!!!include(../../use-cases/internal-transfers.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/international-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Recurring Payments')">
!!!include(../../use-cases/recurring-payments.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/recurring-payments/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Account Linking')">
!!!include(../../use-cases/account-linking.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/account-linking/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Bill Payments')">
!!!include(../../use-cases/bill-payments.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/bill-payments/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Agent Services')">
!!!include(../../use-cases/agent-services.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/agent-services/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
