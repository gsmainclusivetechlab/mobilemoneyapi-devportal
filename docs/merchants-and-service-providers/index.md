---
pageClass: industry-page custom
title: Merchants & Service Providers
---

!!!include(./docs/.vuepress/pages/business/merchants-and-service-providers/hero.md)!!!
!!!include(./docs/.vuepress/pages/business/merchants-and-service-providers/use-cases.md)!!!
!!!include(./docs/.vuepress/pages/business/merchants-and-service-providers/succeed-case.md)!!!
!!!include(./docs/.vuepress/pages/business/merchants-and-service-providers/testimonials.md)!!!
!!!include(./docs/.vuepress/pages/business/merchants-and-service-providers/start-developing.md)!!!

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import TabSection from "../.vuepress/components/TabSection";
import Accordion from "../.vuepress/components/simple-accordion/accordion";
import AccordionItem from "../.vuepress/components/simple-accordion/accordion-item";

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
        link: '/examples'
      },
      tabs: [
        'Merchant Payments',
        'Recurring Payments'
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
}
</script>
