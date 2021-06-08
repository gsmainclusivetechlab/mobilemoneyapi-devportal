<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">
        <h2 class="h2 section-title"> Testimonials </h2>
      </div>
      <div class="testimonials-slider-wrapper">
        <VueSlickCarousel
            v-bind="options"
            :arrows="true"
            :dots="true">
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.
                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices
                    ultrices integer urna, pharetra.</p>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__icon-holder">
                  <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                  </svg>
                </div>
                <img src="/images/slide-item-1.jpg" alt="John Smith">
              </div>
            </div>
          </div>
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.
                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices
                    ultrices integer urna, pharetra.</p>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <img src="/images/slide-item-1.jpg" alt="John Smith">
              </div>
            </div>
          </div>
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
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      options: {
        paginationEnabled: false,
      }
    }
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  padding: 40px;
  height: 150px;

  .VueCarousel-slide {
    text-align: center;
  }
}

.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
