<template>
  <div class="lightbox-holder">
    <CoolLightBox 
      :items="items"
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <img :src="image.thumb">
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  name: 'lightbox',
  components: {
    CoolLightBox,
  },
  props: [
    'videoSrc',
    'videoThumbSrc',
  ],

  data: function () {
    return {
      index: null,
      items: [
        {
          title: '',
          description: "",
          thumb: this.videoThumbSrc,
          src: this.videoSrc,
        },
      ]
    }
  },
};
</script>
