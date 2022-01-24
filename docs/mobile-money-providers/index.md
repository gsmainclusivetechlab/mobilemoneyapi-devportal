---
pageClass: industry-page custom
title: Mobile Money Providers
---

!!!include(docs/.vuepress/pages/business/mobile-money-providers/hero.md)!!!
!!!include(docs/.vuepress/pages/business/mobile-money-providers/use-cases.md)!!!
!!!include(docs/.vuepress/pages/business/mobile-money-providers/start-developing.md)!!!

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
        link: '/examples'
      },
      tabs: [
        'P2P Transfers',
        'Merchant Payments',
        'Disbursements',
        'International Transfers',
        'Recurring Payments',
        'Account Linking',
        'Bill Payments',
        'Agent Services'
      ],
      activeTabName: '',
    }
  },
  mixins: [useCasesTab],
}
</script>
