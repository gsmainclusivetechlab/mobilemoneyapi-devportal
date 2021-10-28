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
            'btn--accent': isActiveTab(tab),
            'btn--inactive': !isActiveTab(tab),
          }"
            @click="handleTabSwitch(tab)"
        >
          {{ tab }}
        </button>
      </div>
      <div class="tabs-holder">
        <TabSection v-show="isActiveTab('Disbursements')">
          tab content will be here (2)
        </TabSection>
      </div>
    </div>
  </div>
</template>

<script>
import TabSection from "./TabSection";
import Accordion from "./simple-accordion/accordion";
import AccordionItem from "./simple-accordion/accordion-item";
import Mermaid from "./Mermaid";

export default {
  name: 'use-cases-governments-with-tabs',
  components: {Mermaid, AccordionItem, Accordion, TabSection},
  data() {
    return {
      tabs: [
        'Disbursements',
      ],
      activeTabName: '',
    }
  },

  created() {
    this.activeTabName = this.tabs.length ? this.tabs[0] : ''
  },

  methods: {
    handleTabSwitch(tabName) {
      this.activeTabName = tabName;
    },
    isActiveTab(title) {
      return title === this.activeTabName
    },
  }
};
</script>
