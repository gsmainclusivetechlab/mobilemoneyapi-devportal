<template>
  <div class="use-case-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--one-column">
        <h2 class="h2 section-title">Explore use cases</h2>
        <div class="section-description">Bibendum integer quam sem purus donec. Morbi volutpat
          euismod cras convallis quam.
        </div>
      </div>
      <div class="use-case-grid">
        <div class="cards-grid">
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/merchant-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Merchant payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/disbursements', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Disbursements</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/international-transfers', icon: 'images/use-case-3.png'}">
              <template v-slot:title>International transfers</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/p-2-p-transfers', icon: '/images/use-case-4.png'}">
              <template v-slot:title>P2P transfers</template>
              <template v-slot:description>Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/recurring-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Recurring payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/account-linking', icon: '/images/use-case-5.png'}">
              <template v-slot:title>Account linking</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/bill-payments', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Bill payments</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/agent-services', icon: '/images/use-case-6.png'}">
              <template v-slot:title>Agent Services</template>
              <template v-slot:description>Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut.</template>
            </use-case-card>
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
}
</script>
