<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">
        <h2 class="h2 section-title"> Testimonials </h2>
      </div>
      <div class="testimonials__slider-wrapper">
        <VueSlickCarousel
            v-bind="options"
            ref="slider">
          <div v-for="(slide, index) in slides" :key="index">
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p> {{ slide.description }} </p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    {{ slide.author }}
                  </span>
                  <span class="testimonials__author--position">
                    {{ slide.position }}
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
                  <img :src="slide.image" :alt="slide.author">
                </div>
              </div>
            </div>
          </div>
          <template #prevArrow>
            <div class="testimonials__arrow testimonials__arrow-prev">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
          <template #nextArrow>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'testimonials-slider',
  props: {
    slides: {
      type: Array,
      default() {
        return [
          {
            image: '/images/slide-item-1.jpg',
            description: 'Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n' +
                'Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n' +
                'ultrices integer urna, pharetra.',
            author: 'John Smith',
            position: 'Developer at Porto',
          },
          {
            image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder',
            description: 'Text for test',
            author: 'Test',
            position: 'Test',
          },
        ];
      },
    },
  },
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
      }
    }
  },
}
</script>
