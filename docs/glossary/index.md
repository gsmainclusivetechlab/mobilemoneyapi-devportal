---
pageClass: glossary-page custom
title: Glossary
---

<template>
  <div class="glossary">
    !!!include(./docs/.vuepress/pages/glossary/search-section.md)!!!
    <div class="search-results-section">
      <div class="container container--narrow">
        <div class="alphabet-box">
          <ul class="alphabet__list">
            <li class="alphabet__list-item" v-for="letter in alphabetFilterLetters":key="`${letter}-filter-key`">
              <button type="button"
                      class="alphabet-filter__btn"
                      :class="{'active': letter === activeLetter}"
                      @click="setActiveLetter(letter)"
              >
                {{ letter }}
              </button>
            </li>
          </ul>
          <select class="alphabet__select" @change="setActiveLetter($event.target.value)">
            <option :selected="letter === activeLetter" v-for="letter in alphabetFilterLetters"
                    :value="letter" :key="`${letter}-option-filter-key`">{{ letter }}
            </option>
          </select>
        </div>
        <h2 v-show="!visibleResults" class="no-results text-center">No results found.</h2>
        !!!include(./docs/.vuepress/pages/glossary/glossary-container.md)!!!
      </div>
    </div>
  </div>
</template>

<script>
import searchSection from '../.vuepress/components/search-section.vue';
import GlossaryItem from "../.vuepress/components/glossary-item";
import GlossaryContainer from "../.vuepress/components/glossary-container";

const alphabetFilterLetters = [
  'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export default {
  name: 'glossary-page',
  components: {
    GlossaryContainer,
    GlossaryItem,
    searchSection,
  },

  props: [
    'title',
    'description',
  ],

  data() {
    return {
      alphabetFilterLetters: alphabetFilterLetters,
      activeLetter: 'All',
      searchebleValue: '',
      visibleResults: true,
    }
  },

  mounted() {
    this.applyFilters();
  },

  methods: {
    applySearchFilter() {
      this.$refs['glossary-co']?.$children?.forEach(item => {
        if (item.showElement) {
          item.showElement = item.$el.innerText.toLowerCase().substring(2).includes(this.searchebleValue.toLowerCase())
        }
      });
    },

    applyLetterFilter() {
      this.$refs['glossary-co']?.$children?.forEach(item => {
        if (this.activeLetter !== 'All') {
          item.showElement = item.$el.innerText.toLowerCase().substring(2).startsWith(this.activeLetter.toLowerCase());
        } else {
          item.showElement = true
        }
      });
    },

    setActiveLetter(letter) {
      this.activeLetter = letter;
    },

    setSearchebleValue(val) {
      this.searchebleValue = val;
    },

    setVisibleResults() {
      this.visibleResults = this.$refs['glossary-co']?.$children?.some(item => item.showElement);
    },

    applyFilters() {
      this.applyLetterFilter();
      this.applySearchFilter();
      this.setVisibleResults();
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
