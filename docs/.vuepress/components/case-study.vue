<template>
  <div class="testimonials__slide testimonials__slide--study">
    <div class="testimonials__content-holder">
      <p>
        <slot name="main-description"></slot>
      </p>
      <div class="testimonials__content--grid">
        <div>
          <p><strong>Challenges</strong></p>
          <p>
            <slot name="first-description"></slot>
          </p>
        </div>
        <div>
          <p><strong>Opportunities</strong></p>
          <p>
            <slot name="second-description"></slot>
          </p>
        </div>
      </div>
    </div>
    <div class="testimonials__info-holder">
      <div class="testimonials__info-image--holder">
        <img
          v-if="mediaType === 'image/png'"
          :class="['testimonials__info-image', customCSSclass]"
          :style="{ height: imageHeight }"
          :src="imageLink"
          alt="Mobile Money API Developer Portal"
        />
        <object
          v-if="mediaType === 'image/svg+xml'"
          :class="['testimonials__info-image', customCSSclass]"
          :style="{ height: imageHeight }"
          :data="imageLink"
          :type="mediaType"
        >
          Mobile Money API Developer Portal
        </object>
      </div>
      <div class="testimonials__info-holder--container">
        <div>
          <p class="testimonials__info-holder--company">
            <slot name="title"></slot>
          </p>
          <p class="testimonials__info-holder--organisation">
            <slot name="org-type"></slot>
          </p>
        </div>
        <div>
          <slot name="use-case-links"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'case-study',
  props: {
    imageLink: {
      type: String,
      default: ''
    },
    imageHeight: {
      type: String,
      default: ''
    },
    customCSSclass: {
      type: String,
      default: ''
    },
    mediaType: {
      type: String,
      default: 'image/png'
    }
  }
};
</script>

<style scoped></style>
