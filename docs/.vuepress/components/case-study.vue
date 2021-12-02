<template>
  <div class="testimonials__slide">
    <div class="testimonials__content-holder">
      <p><slot name="main-description"></slot></p>
      <div class="testimonials__content--grid">
        <div>
          <p><strong>Challenges</strong></p>
          <p><slot name="first-description"></slot></p>
        </div>
        <div>
          <p><strong>Opportunities</strong></p>
          <p><slot name="second-description"></slot></p>
        </div>
      </div>
    </div>
    <div class="testimonials__info-holder">
      <div class="testimonials__info-holder--container">
        <img class="testimonials__info-image" :src="imageLink" alt="Mobile Money API Developer Portal">
        <div>
          <p class="testimonials__info-holder--company"><slot name="title"></slot></p>
          <p class="testimonials__info-holder--organisation"><slot name="org-type"></slot></p>
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
  name: "case-study",
  props: {
    imageLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
