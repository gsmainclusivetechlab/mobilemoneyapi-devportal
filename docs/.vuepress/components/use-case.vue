<template>
<div class="use-case-section section--m-gap">
  <div class="container">
    <div class="section-intro">
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
          link: '#',
          icon: '/images/use-case-1.svg',
          title: 'Merchant payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '#',
          icon: '/images/use-case-2.svg',
          title: 'Disbursements',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '#',
          icon: 'images/use-case-3.svg',
          title: 'International transfers',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '',
          icon: '/images/use-case-4.svg',
          title: 'P2P transfers',
          description: 'Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.'
        },
        {
          link: '',
          icon: '/images/use-case-1.svg',
          title: 'Reccuring payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '',
          icon: '/images/use-case-5.svg',
          title: 'Account linking',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '',
          icon: '/images/use-case-2.svg',
          title: 'Bill payments',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
        {
          link: '',
          icon: '/images/use-case-6.svg',
          title: 'Agent Services',
          description: 'Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.'
        },
      ]
    }
  }
}
</script>
