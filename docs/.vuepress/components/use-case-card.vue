<template>
  <div class="use-case-card">
    <div class="use-case-card__header">
      <div class="use-case-card__icon">
        <div class="icon-holder">
          <img
              v-if="cardItem.icon"
              :src="cardItem.icon"
              alt="use case icon">
        </div>
      </div>
      <h5 class="use-case-card__title">{{ cardItem.title }}</h5>
    </div>
    <div class="use-case-card__content">
      <div class="use-case-card__description">
        <p> {{cardItem.description}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "use-case-card",
  props: [
    'cardItem',
  ],
}
</script>
