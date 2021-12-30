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
        <TabSection v-show="isActiveTab('Merchant Payments')">
!!!include(../../use-cases/merchant-payments.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/merchant-payments/">Start developing</router-link>
        </TabSection>
        <TabSection v-show="isActiveTab('Recurring Payments')">
!!!include(../../use-cases/recurring-payments.md)!!!
<router-link class="btn btn--transparent" to="/use-cases/recurring-payments/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>