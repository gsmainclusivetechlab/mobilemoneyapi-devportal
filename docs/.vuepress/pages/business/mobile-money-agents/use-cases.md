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
        <TabSection  v-if="isActiveTab('Agent Services')" key="1">
!!!include(../../use-cases/agent-services.md)!!!
!!!include(../../use-cases/agent-services-scenarios.md)!!!
<router-link class="btn btn--transparent btn--tab-link" to="/use-cases/agent-services/">Start developing</router-link>
        </TabSection>
      </div>
    </div>
  </div>
</template>
