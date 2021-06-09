<template>
  <div class="industry-hero-section hero-section section section--m-gap">
    <div class="container">
      <div class="section-intro">
        <h1 class="hero-section__title text-center">{{ title }}</h1>
        <div class="hero-section__description text-center">{{ description }}</div>
      </div>
    </div>
    <div class="hero-image-holder">
      <div v-if="imageSrc" class="images-wrapper">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
    </div>
  </div>
</template>

<script>
import lightbox from './lightbox.vue';

export default {
  name: 'industry-hero-section',

  components: {
    lightbox,
  },

  props: [
    'title',
    'description',
    'imageSrc',
    'imageAlt',
  ],
};
</script>
