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

      <!-- <lightbox v-if="videoSrc"
        :videoSrc="videoSrc"
        :videoThumbSrc="videoThumbSrc"
      /> -->
      <div class="hero-iframe-holder">
        <div class="iframe-wrapper">
          <iframe 
            class="iframe"
            v-if="parseVideoLink(videoSrc)"
            :src="parseVideoLink(videoSrc)"
            frameborder="0"
          ></iframe>
        </div>
      </div>

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

  methods: {
    parseVideoLink: (link) => {
      if (!link) {
        return false;
      }

      let videoId;

      if (link.indexOf('vimeo.com/') !== -1 ) {
        const startPos = link.indexOf('vimeo.com/') + 'vimeo.com/'.length;
        const endPos = link.slice(startPos).indexOf('?') !== -1 
        ?
        link.slice(startPos).indexOf('?') + startPos : null;
        
        if (!endPos) {
          videoId = link.slice(startPos);
        } else {
          videoId = link.slice(startPos, endPos);
        }
        return `https://player.vimeo.com/video/${videoId}`
      }

      if (link.indexOf('youtube') !== -1 || link.indexOf('youtu.be') !== -1 ) {
        const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
        const match = link.match(regExp);
        videoId = match[1];
        return `https://www.youtube.com/embed/${videoId}`
      }
      
      return false;
    }
  }
};
</script>
