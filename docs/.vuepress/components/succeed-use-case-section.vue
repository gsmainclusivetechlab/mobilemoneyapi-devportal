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
              <h2 class="h2 section-title">{{ card.title }}</h2>
              <div class="section-description">{{card.description}}</div>
              <ul class="case-list" v-if="card.caseList">
                <li class="case-list__item" v-for="(listItem, index) in card.caseList" :key="`item-${index}`">
                  <div class="bullet" :style="{'color': listItem.bulletColor}"></div>
                  {{listItem.text}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "succeed-use-case-section",
  props: [
    'cards',
  ],
}
</script>

<style scoped>

</style>
