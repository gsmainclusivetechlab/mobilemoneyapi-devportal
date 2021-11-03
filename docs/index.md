---
pageClass: home-page custom
title: Home
---

!!!include(./docs/.vuepress/pages/home/home-hero.md)!!!

!!!include(./docs/.vuepress/pages/home/what-you-get.md)!!!

!!!include(./docs/.vuepress/pages/home/benefits.md)!!!

!!!include(./docs/.vuepress/pages/home/money-metrics.md)!!!

!!!include(./docs/.vuepress/pages/home/explore-possible.md)!!!

!!!include(./docs/.vuepress/pages/home/explore-use-cases.md)!!!

!!!include(./docs/.vuepress/pages/home/platforms.md)!!!

!!!include(./docs/.vuepress/pages/home/get-started.md)!!!

!!!include(./docs/.vuepress/pages/home/testimonials.md)!!!

<script>
import useCaseCard from './.vuepress/components/use-case-card';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  components: {
    useCaseCard,
    VueSlickCarousel
  },
  data () {
    return {
      target: false,
      link: '/mobile-money-providers/',
      icon: '/images/industry-1.svg',
      iconBackground: '#DE002B',
      options: {
        dots: true,
        arrows: true,
        dotsClass: 'testimonials__dots',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
      },
      borderedLink: {
        text: 'Learn more',
        link: '/api-versions-1.2/get-started'
      },
      accentLink: {
        text: 'Start developing',
        link: '/api-versions-1.2/resources/api-service-definition'
      }
    }
  }
}
</script>


