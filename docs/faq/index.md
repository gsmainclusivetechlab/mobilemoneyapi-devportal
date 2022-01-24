---
pageClass: faq-page custom
title: FAQ
---

<template>
  <div class="faq">
    !!!include(docs/.vuepress/pages/faq/search-section.md)!!!
    <div class="search-results-section">
      <div class="container container--narrow">
        <h2 v-show="notFoundResults" class="no-results text-center">No results found.</h2>
        <div v-show="!notFoundResults">
          !!!include(docs/.vuepress/pages/faq/general.md)!!!
          !!!include(docs/.vuepress/pages/faq/technical.md)!!!
          !!!include(docs/.vuepress/pages/faq/security.md)!!!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchSection from '../.vuepress/components/search-section.vue';
import accordion from '../.vuepress/components/simple-accordion/accordion.vue';
import accordionItem from '../.vuepress/components/simple-accordion/accordion-item.vue';

export default {
  components: {
    accordion,
    accordionItem,
    searchSection,
  },

  data() {
    return {
      filteredDaqData: {},
      notFoundResults: false,
      notFoundResult1s: {
        container1: false,
        container2: false,
        container3: false,
      },
      searchString: '',
      containersVisible: {
        1: false,
        2: false,
        3: false
      }
    }
  },
  mounted() {
    this.applyFilter();
  },
  watch: {
    searchString(val) {
      this.applyFilter(val);
      this.hiddenTitle();
    }
  },
  methods: {
    applyFilter() {
      const container1 = this.$refs['accordion-container-1'].$children;
      const container2 = this.$refs['accordion-container-2'].$children;
      const container3 = this.$refs['accordion-container-3'].$children;
      const containers = [...container1, ...container2, ...container3];

      containers.forEach(el => {
        el.showElement = !el.$el.innerText.toLowerCase().includes(this.searchString.toLowerCase());
      });

      this.notFoundResults = !!containers?.every(el => el.showElement);
    },
    hiddenTitle() {
      this.containersVisible[1] = this.$refs['accordion-container-1']?.$children?.every(el =>
          el.showElement);
      this.containersVisible[2] = this.$refs['accordion-container-2']?.$children?.every(el =>
          el.showElement);
      this.containersVisible[3] = this.$refs['accordion-container-3']?.$children?.every(el =>
          el.showElement);
    }
  }
}
</script>

