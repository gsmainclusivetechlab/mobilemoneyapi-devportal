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
        <TabSection  v-if="isActiveTab('Disbursements')" key="1">
!!!include(../../use-cases/disbursements.md)!!!
!!!include(../../use-cases/disbursements-scenarios.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/disbursements/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('P2P Transfers')" key="2">
!!!include(../../use-cases/p2p-transfers.md)!!!
!!!include(../../use-cases/p2p-transfers-scenarios.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/p-2-p-transfers/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
