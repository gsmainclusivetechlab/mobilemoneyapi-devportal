<template>
<div class="use-case-section section--m-gap">
  <div class="container">
    <div class="section-intro section-intro--one-column">
      <h2 class="h2 section-title">Explore use cases</h2>
      <div class="section-description">Bibendum integer quam sem purus donec. Morbi volutpat euismod cras convallis quam.</div>
    </div>
    <div class="use-case-grid">
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
  data() {
    return {
      useCases: [
        {
          link: '/examples/',
          icon: '/images/use-case-1.png',
          title: 'Merchant payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-2.png',
          title: 'Disbursements',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '/examples/',
          icon: 'images/use-case-3.png',
          title: 'International transfers',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-4.png',
          title: 'P2P transfers',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-1.png',
          title: 'Reccuring payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-5.png',
          title: 'Account linking',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-2.png',
          title: 'Bill payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '/examples/',
          icon: '/images/use-case-6.png',
          title: 'Agent Services',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
      ]
    }
  }
}
</script>
