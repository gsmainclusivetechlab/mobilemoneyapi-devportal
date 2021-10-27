---
pageClass: home-page custom
title: Home
---

<home-hero-section
    :videoSrc="'https://www.youtube.com/watch?v=nJkWmKf6b5Q&ab_channel=MobileforDevelopment'"
    :videoThumbSrc="'/images/hero-video-thumb.png'"
    :imageSrc="'/images/hero-video-thumb.png'"
    :imageAlt="'image alt'" 
    :accentLink="{text: 'Go to API Docs', link: '/api-versions-1.2/resources/api-service-definition'}"
    :transparentLink="{text: 'Learn more', link: '/api-versions-1.2/get-started'}">
  <template v-slot:title>
  Welcome to the GSMA Mobile Money API Developer Portal.
  </template>
  <template v-slot:description>
  The Mobile Money API is an initiative developed through collaboration between the mobile money 
  industry and the GSMA, which provides a harmonized API Specification for all the common mobile 
  money use cases which is both easy to use and secure.
  </template>
</home-hero-section>

<template>
  <div class="what-you-get-section section section--m-gap">
    <div class="container">
      <div class="what-you-get__box">
        <div class="image-holder">
          <img class="image" src="/images/what_youll_get.jpg" alt="">
        </div>
        <div class="content-holder">
          <div class="section-intro">

## What you’ll get

<div class="section-description">We provide access to harmonized API Specification for all the common mobile money use cases which is both easy to use and secure.</div>
          </div>
          <ul class="what-you-get__list">
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder docs">
                  <img src="/images/what-you-get-icon-1.svg" alt="">
                </div>
              </div>
              <div class="title">API Docs</div>
            </li>
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder use-cases">
                  <img src="/images/what-you-get-icon-2.svg" alt="">
                </div>
              </div>
              <div class="title">API Use Cases</div>
            </li>
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder simulator">
                  <img src="/images/what-you-get-icon-3.svg" alt="">
                </div>
              </div>
              <div class="title">GSMA Simulator</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="benefits-list-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Benefits and objectives

<div class="section-description">Lobortis porta aliquam morbi eget. Duis in vitae sed eleifend hendrerit justo, vestibulum, proin.</div>
      </div>
      <div class="benefits-list-holder">
        <div class="benefits-list">
          <h4 class="h4">For API providers</h4>
          <ul class="dotted-list">
            <li class="dotted-list__item">Lobortis porta aliquam morbi eget. Duis in vitae sed eleifend hendrerit justo, vestibulum, proin.</li>
            <li class="dotted-list__item">Dictumst vel velit augue vitae, eu rhoncus quis.</li>
            <li class="dotted-list__item">Massa platea nunc metus vestibulum turpis lorem eu purus sed.</li>
          </ul>
        </div>
        <div class="benefits-list">
          <h4 class="h4">For API consumers</h4>
          <ul class="dotted-list">
            <li class="dotted-list__item">Aliquet sem ullamcorper metus, fames vivamus viverra varius ac aliquet.</li>
            <li class="dotted-list__item">Orci sodales sit aliquam enim non convallis. Pharetra, nulla sed consectetur eu suscipit diam.</li>
            <li class="dotted-list__item">Porta aenean a iaculis donec purus.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="mm-metrics-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">

## Mobile Money Metrics

</div>
        <div class="section-intro__column">
          <div class="section-description">Explore our interactive tool that provides a comprehensive set of global metrics by combining unique data sources.</div>
        </div>
      </div>
      <div class="iframe-box">
        <!-- <iframe src="" frameborder="0"></iframe> -->
        <img src="/images/iframe_placeholder.png" alt="iframe will be here">
      </div>
      <a href="https://www.gsma.com/mobilemoneymetrics/wp-content/uploads/Deployment_Tracker_dataset.xlsx" target="_blank" class="btn btn--accent">Download dataset</a>
    </div>
  </div>
</template>

<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">

## Explore what’s possible

<div class="section-description">
            Bibendum integer quam sem purus donec. Morbi volutpat euismod cras convallis quam.
          </div>
        </div>
        <div class="section-intro__column">
          <router-link
              v-if="!target"
              :to="link"
              class="industries-card"
          >
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': iconBackground}">
                <img :src="icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">Mobile Money Provider</h5>
            <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
            <div class="btn btn--transparent">Learn more</div>
          </router-link>
          <a v-else :href="link" class="industries-card" target="_blank">
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': iconBackground}">
                <img :src="icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">Mobile Money Provider</h5>
            <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
            <div class="btn btn--transparent">Learn more</div>
          </a>
        </div>
      </div>
      <div class="industries-grid">
        <div class="cards-grid">
          <div class="cards-grid__item">
            <router-link
                to="/merchants-and-service-providers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#EE3772">
                  <img src="/images/industry-2.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Merchants & Service Providers</h5>
              <div class="industries-description">Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/governments/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FCBB2C">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Governments</h5>
              <div class="industries-description">Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/humanitarian-agencies/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A182">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Humanitarian Agencies</h5>
              <div class="industries-description">Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/international-transfer-organisations/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A6C9">
                  <img src="/images/industry-4.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">International Transfer Organisations</h5>
              <div class="industries-description">Fringilla egestas ut sit odio hendrerit in quis purus in. Molestie euismod cras dis neque eget urna eget amet enim.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/payment-service-providers-and-payment-aggregators/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FF6600">
                  <img src="/images/industry-5.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Payment Service Providers & Payment Aggregators</h5>
              <div class="industries-description">At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/banks-microfinance-institutions/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#95226C">
                  <img src="/images/industry-1.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Banks & Microfinance Institutions</h5>
              <div class="industries-description">At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/fintech-providers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#99CCCC">
                  <img src="/images/industry-5.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">FinTech Providers (Insurance Savings Loans)</h5>
              <div class="industries-description">Et vel tincidunt ipsum eleifend nisi. Ipsum sapien neque pellentesque nec nibh tellus scelerisque ut lectus.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/employers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A6C9">
                  <img src="/images/industry-1.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Employers</h5>
              <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/energy-utilities-agritech/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FF6600">
                  <img src="/images/industry-2.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Energy & Utilities & AgriTech</h5>
              <div class="industries-description">Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/education-and-health/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#95226C">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Education & Health</h5>
              <div class="industries-description">Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/mobile-money-agents/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#99CCCC">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Mobile Money Agents</h5>
              <div class="industries-description">Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="use-case-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--one-column">

## Explore use cases

<div class="section-description">Bibendum integer quam sem purus donec. Morbi volutpat
          euismod cras convallis quam.
        </div>
      </div>
      <div class="use-case-grid">
        <div class="cards-grid">
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/merchant-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Merchant payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/disbursements', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Disbursements</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/international-transfers', icon: 'images/use-case-3.png'}">
              <template v-slot:title>International transfers</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/p-2-p-transfers', icon: '/images/use-case-4.png'}">
              <template v-slot:title>P2P transfers</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/recurring-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Recurring payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/account-linking', icon: '/images/use-case-5.png'}">
              <template v-slot:title>Account linking</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/bill-payments', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Bill payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/agent-services', icon: '/images/use-case-6.png'}">
              <template v-slot:title>Agent Services</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCaseCard from './.vuepress/components/use-case-card';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'use-case',
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

<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="special-grid__container">
        <div class="special-grid__block">
          <div class="special-grid__image-holder">
            <img src="/images/succeed-use-case.jpg" alt="image alt">
          </div>
          <div class="special-grid__content-holder">
            <div class="section-intro__column">

## Compliance platform

<div class="section-description">Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.</div>
              <router-link to="#" class="btn btn--accent">Learn more</router-link>
            </div>
          </div>
        </div>
        <div class="special-grid__block">
          <div class="special-grid__image-holder">
            <img src="/images/succeed-use-case.jpg" alt="image alt">
          </div>
          <div class="special-grid__content-holder">
            <div class="section-intro__column">

## Collaboration platform

<div class="section-description">Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.</div>
              <router-link to="#" class="btn btn--accent">Learn more</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="get-started-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Get Started with Development

<div class="section-description">We offers a powerful and easy to use tools to take full
          advantage of the Mobile Money API Specification.
        </div>
      </div>
      <div class="buttons-holder content-center get-started__btn-holder">
        <router-link
            v-if="borderedLink"
            :to="borderedLink.link"
            class="btn"
        > {{ borderedLink.text }}
        </router-link>
        <router-link
            v-if="accentLink"
            :to="accentLink.link"
            class="btn btn--accent"
        > {{ accentLink.text }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## Testimonials

</div>
      <div class="testimonials__slider-wrapper">
        <VueSlickCarousel
            v-bind="options"
            ref="slider">
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.
                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices
                    ultrices integer urna, pharetra.</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    John Smith
                  </span>
                  <span class="testimonials__author--position">
                    Developer at Porto
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="/images/slide-item-1.jpg" alt="John Smith">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Text for test 1</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    Test 1
                  </span>
                  <span class="testimonials__author--position">
                    Test 1
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-1" alt="Test 1">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Text for test 2</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    Test 2
                  </span>
                  <span class="testimonials__author--position">
                    Test 2
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-2" alt="Test 2">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Text for test 3</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    Test 3
                  </span>
                  <span class="testimonials__author--position">
                    Test 3
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-3" alt="Test 3">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Text for test 4</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    Test 4
                  </span>
                  <span class="testimonials__author--position">
                    Test 4
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder-4" alt="Test 4">
                </div>
              </div>
            </div>
          </div>
          <template v-slot:prevArrow>
            <div class="testimonials__arrow testimonials__arrow-prev">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
          <template v-slot:nextArrow>
            <div class="testimonials__arrow testimonials__arrow-next">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
