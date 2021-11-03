---
pageClass: industry-page custom
title: Energy & Utilities & AgriTech
---

!!!include(./docs/.vuepress/pages/business/energy-utilities-agritech/hero.md)!!!
!!!include(./docs/.vuepress/pages/business/energy-utilities-agritech/use-cases.md)!!!
!!!include(./docs/.vuepress/pages/business/energy-utilities-agritech/succeed-case.md)!!!
!!!include(./docs/.vuepress/pages/business/energy-utilities-agritech/testimonials.md)!!!
!!!include(./docs/.vuepress/pages/business/energy-utilities-agritech/start-developing.md)!!!

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import useCasesTab from "../.vuepress/mixins/useCasesTab.js";

export default {
  components: {
    VueSlickCarousel
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
