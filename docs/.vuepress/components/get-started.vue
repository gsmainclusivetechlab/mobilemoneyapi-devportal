<template>
<div class="get-started-section section--p-gap">
  <div class="container container--narrow">
    <div class="section-intro section-intro--narrow text-center">
      <h2 class="h2 section-title"> {{ sectionTitle }} </h2>
      <div class="section-description"> {{ sectionDescription }} </div>
    </div>
    <div class="buttons-holder content-center get-started__btn-holder">
      <router-link
          :to="borderedLink.link"
          class="btn btn--bordered"
      > {{ borderedLink.text }} </router-link>
      <router-link
          :to="accentLink.link"
          class="btn btn--accent"
      > {{ accentLink.text }} </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "get-started",
  props: {
    sectionTitle: {
      type: String,
      default: 'Title'
    },
    sectionDescription:{
      type: String,
      default: 'Description'
    },
    borderedLink: {
      type: Object,
      default: {text: 'Learn more', link: '#'}
    },
    accentLink: {
      type: Object,
      default: {text: 'Start developing', link: '#'}
    },
  },
}
</script>
