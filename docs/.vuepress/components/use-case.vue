<template>
<div class="use-case-section section--m-gap">
  <div class="container">
    <div class="section-intro section-intro--one-column">
      <h2 v-if="sectionTitle" class="h2 section-title"> {{ sectionTitle }} </h2>
      <div v-if="sectionDescription" class="section-description"> {{ sectionDescription }} </div>
    </div>
    <div v-if="useCases" class="use-case-grid">
      <div class="cards-grid">
        <div class="cards-grid__item"
             v-for="(useCase, index) in useCases" :key="`case-${index}`">
            <use-case-card :card-item="useCase"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import useCaseCard from './use-case-card';

export default {
  name: 'use-case',
  
  components: {
    useCaseCard,
  },

  props: {
    sectionTitle: {
      type: String,
      default: null,
    },
    sectionDescription: {
      type: String,
      default: null,
    },
    useCases: {
      type: Array[Object],
    }
  },
}
</script>
