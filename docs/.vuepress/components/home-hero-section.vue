<template>
  <div class="hero-section section section--m-gap">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 v-if="title" class="hero-section__title text-center">{{ title }}</h1>
        <div v-if="description" class="hero-section__description text-center">{{ description }}</div>
      </div>

      <div class="buttons-holder content-center">
        <router-link v-if="transparentLink.text"
          :to="transparentLink.link ? transparentLink.link : '#'"
          class="btn"
        >
          {{ transparentLink.text }}
        </router-link>
        <router-link v-if="accentLink.text"
          :to="accentLink.link ? accentLink.link : '#'"
          class="btn btn--accent"
        >
          {{ accentLink.text }}
        </router-link>
      </div>
      <div v-if="videoSrc" class="hero-iframe-holder">
        <div class="iframe-wrapper">
          <iframe 
            class="iframe"
            v-if="parseVideoLink(videoSrc)"
            :src="parseVideoLink(videoSrc)"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div v-if="imageSrc" class="hero-image-holder">
        <div v-if="imageSrc && !videoSrc" class="images-wrapper">
          <img :src="imageSrc" :alt="imageAlt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-section',

  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    videoSrc: {
      type: String,
      default: '',
    },
    videoThumbSrc: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    accentLink: {
      type: Object,
      default: null,
    },
    transparentLink: {
      type: Object,
      default: null,
    },
  },

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
