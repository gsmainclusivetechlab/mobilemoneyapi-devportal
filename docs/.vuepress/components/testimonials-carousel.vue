<template>
  <VueSlickCarousel
      v-bind="options"
      ref="slider">
    <slot></slot>
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
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'testimonials-carousel',
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
    };
  }
};
</script>

<style scoped>

</style>
