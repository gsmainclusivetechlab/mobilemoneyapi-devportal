---
pageClass: industry-page custom
title: Humanitarian Agencies
---

!!!include(docs/.vuepress/pages/business/humanitarian-agencies/hero.md)!!!
!!!include(docs/.vuepress/pages/business/humanitarian-agencies/use-cases.md)!!!
!!!include(docs/.vuepress/pages/business/humanitarian-agencies/succeed-case.md)!!!
!!!include(docs/.vuepress/pages/business/humanitarian-agencies/start-developing.md)!!!

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import TabSection from "../.vuepress/components/TabSection";
import Accordion from "../.vuepress/components/simple-accordion/accordion";
import AccordionItem from "../.vuepress/components/simple-accordion/accordion-item";
import useCasesTab from "../.vuepress/mixins/useCasesTab.js";

export default {
  components: {
    VueSlickCarousel, AccordionItem, Accordion, TabSection
  },
  data() {
    return {
      options: {
        dots: true,
        arrows: true,
        dotsClass: 'testimonials__dots',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
      },
      borderedLink: false,
      accentLink: {
        text: 'Start developing',
      },
      tabs: [
        'P2P Transfers',
        'Disbursements'
      ],
      activeTabName: '',
    }
  },
  created() {
    this.activeTabName = this.tabs.length ? this.tabs[0] : ''
  },
  mixins: [useCasesTab],
  methods: {
    handleTabSwitch(tabName) {
      this.activeTabName = tabName;
    },
    isActiveTab(title) {
      return title === this.activeTabName
    },
  }
}
</script>
