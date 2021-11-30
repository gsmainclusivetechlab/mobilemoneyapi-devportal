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
        </TabSection>
        <TabSection v-show="isActiveTab('Account Linking')">
!!!include(../../use-cases/account-linking.md)!!!
        </TabSection>
        <TabSection v-show="isActiveTab('Agent Services')">
!!!include(../../use-cases/agent-services.md)!!!
        </TabSection>
      </div>
    </div>
  </div>
</template>
