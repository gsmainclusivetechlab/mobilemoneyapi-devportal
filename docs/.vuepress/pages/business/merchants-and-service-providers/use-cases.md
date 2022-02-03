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
        <TabSection  v-if="isActiveTab('Merchant Payments')" key="1">
!!!include(../../use-cases/merchant-payments.md)!!!
!!!include(../../use-cases/merchant-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/merchant-payments/">Start developing</router-link>
        </TabSection>
        <TabSection  v-if="isActiveTab('Recurring Payments')" key="2">
!!!include(../../use-cases/recurring-payments.md)!!!
!!!include(../../use-cases/recurring-payments-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/recurring-payments/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
