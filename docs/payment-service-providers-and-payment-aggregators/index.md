---
pageClass: industry-page custom
title: Payment Service Providers & Payment Aggregators
---

!!!include(docs/.vuepress/pages/business/payment-service-providers-and-payment-aggregators/hero.md)!!!
!!!include(docs/.vuepress/pages/business/payment-service-providers-and-payment-aggregators/use-cases.md)!!!
!!!include(docs/.vuepress/pages/business/payment-service-providers-and-payment-aggregators/testimonials.md)!!!
!!!include(docs/.vuepress/pages/business/payment-service-providers-and-payment-aggregators/start-developing.md)!!!

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
        'International Transfers',
        'Merchant Payments'
      ],
      activeTabName: '',
    }
  },
  mixins: [useCasesTab],
}
</script>
