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
        <TabSection  v-if="isActiveTab('P2P Transfers')" key="1">
!!!include(../../use-cases/p2p-transfers.md)!!!
!!!include(../../use-cases/p2p-transfers-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/p-2-p-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('International Transfers')" key="2">
!!!include(../../use-cases/internal-transfers.md)!!!
!!!include(../../use-cases/internal-transfers-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/international-transfers/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Merchant Payments')" key="3">
!!!include(../../use-cases/merchant-payments.md)!!!
!!!include(../../use-cases/merchant-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/merchant-payments/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
