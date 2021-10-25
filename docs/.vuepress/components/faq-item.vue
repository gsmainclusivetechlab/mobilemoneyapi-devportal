<template>
  <div class="faq-results__item">
    <h2 class="h2 faq-results__item-title">{{ itemKey }}</h2>
    <accordion>
      <accordion-item v-for="(categoryItem, index) in item" :key="`category-item-${index}`">
        <template #header>
          {{ categoryItem.title }}
        </template>

        <template #body>
          <div v-html="categoryItem.text"></div>
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
import Accordion from "./simple-accordion/accordion";
import AccordionItem from "./simple-accordion/accordion-item";
export default {
  name: "faq-item",
  components: {AccordionItem, Accordion},
  props: [
    'itemKey',
    'item'
  ]
}
</script>

<style scoped>

</style>
