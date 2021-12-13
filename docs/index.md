---
pageClass: home-page custom
title: Home
---

<div-box></div-box>

::: slot test
Hello World!
:::

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
import divBox from './.vuepress/components/DivBox';

export default {
  components: {
    useCaseCard,
    divBox
  },
  data () {
    return {
      target: false,
      link: '/mobile-money-providers/',
      icon: '/images/industry-1.svg',
      iconBackground: '#DE002B',
    }
  }
}
</script>


