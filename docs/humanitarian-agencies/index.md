---
pageClass: industry-page custom
title: Humanitarian Agencies
---

<IndustryHeroSection :imageSrc="'/images/industry-hero.jpg'" :imageAlt="'image alt'">
  <template v-slot:title>
  Humanitarian Agencies
  </template>    
  <template v-slot:description>
  Humanitarian organisations help to ensure that there is swift, efficient humanitarian assistance available when sudden natural disasters strike or wars occur or in connection with long-term conflicts.
  </template>    
</IndustryHeroSection>

  <use-cases-humanitarian-agencies-with-tabs :defaultTab="1"/>

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

## Succeed case study

<div class="section-description">
                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere
                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et
                neque.
              </div>
              <ul class="case-list">
                <li class="case-list__item">
                  <div class="bullet" style="color: #00568F"></div>
                  Increased conversion
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #FF6600"></div>
                  Important point
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #00A182"></div>
                  Reduced errors
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #FCBB2C"></div>
                  Important point
                </li>
              </ul>
            </div>
          </div>
        </div>
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

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

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
      }
    }
  },
}
</script>

<template>
  <section class="get-started-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Ready to explore?

<div class="section-description">Find our latest API documentation.
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
