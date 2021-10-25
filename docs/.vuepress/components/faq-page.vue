<template>
  <div class="faq">
    <search-section
        @on-search="applyFilter">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #description>
        <slot name="description"></slot>
      </template>
    </search-section>
    <div class="search-results-section">
      <div class="container container--narrow">
        <h2 v-if="!Object.keys(filteredDaqData).length" class="no-results text-center">No results
          found.</h2>
        <template v-else>
          <faq-item v-for="(item, key) in filteredDaqData" :key="`category-${key}`" :item="item"
                    :itemKey="key"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import searchSection from './search-section.vue';

import faqData from '../data/faqData';
import FaqItem from "./faq-item";

export default {
  name: 'faq-page',
  components: {
    FaqItem,
    searchSection,
  },

  props: [
    'title',
    'description',
  ],

  data() {
    return {
      faqDataSource: null,
      filteredDaqData: {},
    }
  },

  created() {
    this.faqDataSource = faqData;
    this.applyFilter('');
  },

  methods: {
    applyFilter(searchebleValue) {
      this.filteredDaqData = {};

      this.faqDataSource.forEach(item => {
        item.items.forEach(el => {
          if (
              el.title.toLowerCase().includes(searchebleValue.toLowerCase())
              ||
              el.text.toLowerCase().includes(searchebleValue.toLowerCase())
          ) {
            if (!this.filteredDaqData[item.title]) {
              this.filteredDaqData[item.title] = [];
            }

            this.filteredDaqData[item.title].push(el);
          }
        });
      });
    }
  }
}
</script>
