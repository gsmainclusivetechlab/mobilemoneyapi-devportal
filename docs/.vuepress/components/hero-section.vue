<template>
  <div class="hero-section section section--m-gap">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="hero-section__title text-center">{{ title }}</h1>
        <div class="hero-section__description text-center">{{ description }}</div>
      </div>

      <div class="buttons-holder content-center">
        <router-link v-if="accentLink.text"
          :to="accentLink.link ? accentLink.link : '#'"
          class="btn btn--accent"
        >
          {{ accentLink.text }}
        </router-link>
        <router-link v-if="transparentLink.text"
          :to="transparentLink.link ? transparentLink.link : '#'"
          class="btn"
        >
          {{ transparentLink.text }}
        </router-link>
      </div>

      <lightbox v-if="videoSrc"
        :videoSrc="videoSrc"
        :videoThumbSrc="videoThumbSrc"
      />

      <div class="hero-image-holder">
        <div v-if="imageSrc && !videoSrc" class="images-wrapper">
          <img :src="imageSrc" :alt="imageAlt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lightbox from './lightbox.vue';

export default {
  name: 'hero-section',

  components: {
    lightbox,
  },

  props: [
    'title',
    'description',
    'videoSrc',
    'videoThumbSrc',
    'imageSrc',
    'imageAlt',
    'accentLink',
    'transparentLink',
  ],
};
</script>
