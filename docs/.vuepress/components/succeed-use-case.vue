<template>
  <div class="special-grid__block">
    <div class="special-grid__image-holder">
      <img :src="image" alt="image alt">
    </div>
    <div class="special-grid__content-holder">
      <div class="section-intro__column">
        <h2 class="h2 section-title">
          <slot name="title"></slot>
        </h2>
        <div class="section-description">
          <slot name="description"></slot>
        </div>
        <ul class="case-list" v-if="caseList">
          <li class="case-list__item" v-for="(listItem, index) in caseList" :key="`item-${index}`">
            <div class="bullet" :style="{'color': listItem.bulletColor}"></div>
            {{ listItem.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "succeed-use-case",
  props: [
    'image',
    'caseList'
  ]
}
</script>

<style scoped>

</style>
