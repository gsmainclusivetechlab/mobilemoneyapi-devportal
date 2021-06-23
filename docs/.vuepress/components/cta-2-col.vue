<template>
<section v-if="ctaCards" class="cta-cards-block">
  <div class="cta-cards-holder">
    <div v-for="(ctaCard, index) in ctaCards" :key="`cta-card-${index}`" class="cta-card">
      <h2 v-if="ctaCard.title" class="cta-card__title">{{ ctaCard.title }}</h2>
      <div v-if="ctaCard.text" class="cta-card__text">{{ ctaCard.text }}</div>
      <a v-if="ctaCard.link && ctaCard.linkText" :href="ctaCard.link" class="cta-card__link">{{ ctaCard.linkText }}</a>
    </div>
  </div>
</section>
</template>

<script>
export default {
name: "cta-2-col",
  props: {
    ctaCards: {
      type: Array[{}],
    },
  },
}
</script>
