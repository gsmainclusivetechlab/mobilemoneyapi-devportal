<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="special-grid__container">
        <div class="special-grid__block"
             v-for="(card, index) in cards"
             :key="index"
             >
          <div class="special-grid__image-holder">
            <img
                :src="card.image"
                alt="image alt">
          </div>
          <div class="special-grid__content-holder">
            <div class="section-intro__column">
              <h2 class="h2 section-title"> {{ card.title }}</h2>
              <div
                  class="section-description"> {{card.description}} </div>
              <router-link
                  :to="card.link"
                  class="btn btn--accent"
              > {{ card.btnText }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "column-section",
  props: {
    cards: {
      type: Array,
      default() {
        return [
          {
            image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder',
            title: 'Compliance platform',
            description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
            btnText: 'Learn more',
            link: '#',
          },
          {
            image: 'https://via.placeholder.com/400x400/F8F8F9/DE002B?text=placeholder',
            title: 'Collaboration platform',
            description: 'Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.',
            btnText: 'Learn more',
            link: '#',
          },
        ];
      },
    },
  },
}
</script>

<style scoped>

</style>
