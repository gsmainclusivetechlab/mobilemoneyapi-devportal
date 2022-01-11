---
pageClass: industry-page custom
title: Education & Health
---

!!!include(./docs/.vuepress/pages/business/education-and-health/hero.md)!!!
!!!include(./docs/.vuepress/pages/business/education-and-health/use-cases.md)!!!
!!!include(./docs/.vuepress/pages/business/education-and-health/testimonials.md)!!!
!!!include(./docs/.vuepress/pages/business/education-and-health/start-developing.md)!!!

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
        'Recurring Payments',
        'Bill Payments'
      ],
      activeTabName: '',
    }
  },
  mixins: [useCasesTab],
}
</script>
