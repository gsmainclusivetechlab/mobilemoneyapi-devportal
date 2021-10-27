<template>
  <router-link
      :to="cardItem.link"
      class="use-case-card">
    <div class="use-case-card__header">
      <div class="use-case-card__icon">
        <img
            v-if="cardItem.icon"
            :src="cardItem.icon"
            alt="use case icon">
      </div>
      <h5 class="use-case-card__title">
        <slot name="title"></slot>
      </h5>
    </div>
    <div class="use-case-card__content">
      <div class="use-case-card__description">
        <p>
          <slot name="description"></slot>
        </p>
      </div>
    </div>
    <div class="use-case-card__footer">
      <svg width="18" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 0L9.428 1.045l5.684 5.705H0v1.5h15.113l-5.685 5.68L10.5 15 18 7.5 10.5 0z"
              fill="#242529"/>
      </svg>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "use-case-card",
  props: [
    'cardItem',
  ],
}
</script>
