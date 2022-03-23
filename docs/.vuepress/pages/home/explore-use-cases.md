<template>
  <div class="use-case-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--one-column">

## Explore use cases

<div class="section-description">How can the GSMA API support common mobile money use cases?  Explore the use cases relevant for your business.
        </div>
      </div>
      <div class="use-case-grid">
        <div class="cards-grid">
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/merchant-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Merchant payments</template>
              <template v-slot:description>Enables merchants to accept payments from mobile money customers via payee-initiated, payer-initiated and pre-authorised merchant payments</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/disbursements', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Disbursements</template>
              <template v-slot:description>Enables organisations to disburse funds to mobile money recipients via individual and bulk transfers</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/international-transfers', icon: 'images/use-case-3.png'}">
              <template v-slot:title>International transfers</template>
              <template v-slot:description>Enables financial service providers to perform cross-border mobile money transfers, including remittances</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/p-2-p-transfers', icon: '/images/use-case-4.png'}">
              <template v-slot:title>P2P transfers</template>
              <template v-slot:description>Enables financial service providers to transfer funds between domestic mobile money account holders or to other recipients</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/recurring-payments', icon: '/images/use-case-1.png'}">
              <template v-slot:title>Recurring payments</template>
              <template v-slot:description>Enables service providers to setup payment mandates for mobile money customers and initiate payments against mandates</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/account-linking', icon: '/images/use-case-5.png'}">
              <template v-slot:title>Account linking</template>
              <template v-slot:description>Enables providers to link digital financial services accounts to mobile money accounts, allowing customers to transfer funds between accounts</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/bill-payments', icon: '/images/use-case-2.png'}">
              <template v-slot:title>Bill payments</template>
              <template v-slot:description>Enables service providers to accept bill payments from mobile money customers</template>
            </use-case-card>
          </div>
          <div class="cards-grid__item">
            <use-case-card :card-item="{link: '/use-cases/agent-services', icon: '/images/use-case-6.png'}">
              <template v-slot:title>Agent Services</template>
              <template v-slot:description>Enables agents to register new accounts and agents or ATM platforms to provide cash-in and cash-out services</template>
            </use-case-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
