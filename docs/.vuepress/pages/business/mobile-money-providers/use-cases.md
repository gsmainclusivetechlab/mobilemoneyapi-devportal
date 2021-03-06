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
        <TabSection v-if="isActiveTab('P2P Transfers')" key="1">
!!!include(../../use-cases/p2p-transfers.md)!!!
!!!include(../../use-cases/p2p-transfers-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/p-2-p-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection v-if="isActiveTab('Merchant Payments')" key="2">
!!!include(../../use-cases/merchant-payments.md)!!!
!!!include(../../use-cases/merchant-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/merchant-payments/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Disbursements')" key="3">
!!!include(../../use-cases/disbursements.md)!!!
!!!include(../../use-cases/disbursements-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/disbursements/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('International Transfers')" key="4">
!!!include(../../use-cases/internal-transfers.md)!!!
!!!include(../../use-cases/internal-transfers-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/international-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Recurring Payments')" key="5">
!!!include(../../use-cases/recurring-payments.md)!!!
!!!include(../../use-cases/recurring-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/recurring-payments/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Account Linking')" key="6">
!!!include(../../use-cases/account-linking.md)!!!
!!!include(../../use-cases/account-linking-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/account-linking/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Bill Payments')" key="7">
!!!include(../../use-cases/bill-payments.md)!!!
!!!include(../../use-cases/bill-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/bill-payments/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Agent Services')" key="8">
!!!include(../../use-cases/agent-services.md)!!!
!!!include(../../use-cases/agent-services-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/agent-services/" key="9">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
