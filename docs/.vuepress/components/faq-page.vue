<template>
  <div class="faq">
    <search-section
      @on-search="applyFilter"
      :title="title"
      :description="description"
    />

    <div class="search-results-section">
      <div class="container container--narrow">
        <h2 v-if="!Object.keys(filteredDaqData).length" class="no-results text-center">No results found.</h2>
        <template v-else>
          <div class="faq-results__item" v-for="(item, key) in filteredDaqData" :key="`category-${key}`">
            <h2 class="h2 faq-results__item-title">{{ key }}</h2>
            <accordion>
              <accordion-item v-for="(categoryItem, index) in item" :key="`category-item-${index}`">
                <template #header>
                  {{ categoryItem.title }}
                </template>

                <template #body>
                  <div v-html="categoryItem.text"></div>
                </template>
              </accordion-item>
            </accordion>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import accordion from './simple-accordion/accordion.vue';
import accordionItem from './simple-accordion/accordion-item.vue';

import searchSection from './search-section.vue';

import faqData from '../data/faqData';

export default {
  name: 'faq-page',
  components: {
    accordion,
    accordionItem,
    searchSection,
  },

  props: [
    'title',
    'description',
  ],

  data: function() {
    return {
      faqDataSource: null,
      filteredDaqData: {},
    }
  },

  created: function() {
    this.faqDataSource = faqData;
    this.applyFilter('');
  },

  methods: {
    applyFilter: function(searchebleValue) {
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