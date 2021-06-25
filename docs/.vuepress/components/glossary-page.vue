<template>
  <div class="glossary">
    <search-section
      @on-search="setSearchebleValue"
      :title="title"
      :description="description"
    />

    <div class="search-results-section">
      <div class="container container--narrow">
        <div class="alphabet-box">
          <ul class="alphabet__list">
            <li class="alphabet__list-item" v-for="letter in alphabetFilterLetters" :key="`${letter}-filter-key`">
              <button
                type="button"
                class="alphabet-filter__btn"
                :class="{'active': letter === activeLetter}"
                @click="setActiveLetter(letter)"
              >
                {{letter}}
              </button>
            </li>
          </ul>
          <select class="alphabet__select" @change="setActiveLetter($event.target.value)">
            <option :selected="letter === activeLetter" v-for="letter in alphabetFilterLetters" :value="letter" :key="`${letter}-option-filter-key`">{{letter}}</option>
          </select>
        </div>
        <h2 v-if="!Object.keys(filteredDataBySearch).length" class="no-results text-center">No results found.</h2>
        <div v-else class="glossary-results">
          <div class="glossary-results__item" v-for="(item, key) in filteredDataBySearch" :key="`category-${key}`">
            <h5 class="h5 glossary-results__item-title">{{ item.title }}</h5>
            <div class="glossary-results__item-text">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import accordion from './simple-accordion/accordion.vue';
import accordionItem from './simple-accordion/accordion-item.vue';

import searchSection from './search-section.vue';

import glossaryData from '../data/glossaryData';

const alphabetFilterLetters = [
  'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export default {
  name: 'glossary-page',
  components: {
    accordion,
    accordionItem,
    searchSection,
  },

  props: [
    'title',
    'description',
  ],

  data() {
    return {
      glossaryDataSource: null,
      filteredDataBySearch: [],
      filteredDataByAlphabet: [],
      alphabetFilterLetters: alphabetFilterLetters,
      activeLetter: 'C',
      searchebleValue: '',
    }
  },

  created() {
    this.glossaryDataSource = glossaryData;
    this.applyFilters();
  },

  methods: {
    applySearchFilter() {
      this.filteredDataBySearch = [];

      this.filteredDataBySearch = this.filteredDataByAlphabet.filter(item => {
        return item.title.toLowerCase().includes(this.searchebleValue.toLowerCase())
          ||
          item.text.toLowerCase().includes(this.searchebleValue.toLowerCase());
      });
    },

    applyLetterFilter() {
      this.filteredDataByAlphabet = this.glossaryDataSource.filter(item => {
        return this.activeLetter === 'All' || item.title.toLowerCase().startsWith(this.activeLetter.toLowerCase());
      });
    },

    setActiveLetter(letter) {
      this.activeLetter = letter;
    },

    setSearchebleValue(val) {
      this.searchebleValue = val;
    },

    applyFilters() {
      this.applyLetterFilter();
      this.applySearchFilter();
    }
  },

  watch: {
    activeLetter() {
      this.applyFilters();
    },

    searchebleValue() {
      this.applyFilters();
    },
  }
}
</script>