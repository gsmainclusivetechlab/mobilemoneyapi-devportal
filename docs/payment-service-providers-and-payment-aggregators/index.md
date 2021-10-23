---
pageClass: industry-page custom
title: Payment Service Providers & Payment Aggregators
---

<IndustryHeroSection :imageSrc="'/images/industry-hero.jpg'" :imageAlt="'image alt'">
  <template v-slot:title>
  Payment Service Providers & Payment Aggregators
  </template>    
  <template v-slot:description>
  A payment service provider offers shops online services for accepting electronic payments by a variety of payment methods including credit card, bank-based payments such as direct debit, bank transfer, and real-time bank transfer based on online banking.
  </template>    
</IndustryHeroSection>

<use-cases-payment-service-providers-payment-aggregators-with-tabs :defaultTab="1"/>

<succeed-use-case-section>
  <succeed-use-case :image="'/images/succeed-use-case.jpg'"
  :caseList="[
        {
          bulletColor: '#00568F',
          text: 'Increased conversion',
        },
        {
          bulletColor: '#FF6600',
          text: 'Important point',
        },
        {
          bulletColor: '#00A182',
          text: 'Reduced errors',
        },
        {
          bulletColor: '#FCBB2C',
          text: 'Important point',
        },
      ]"
  >
  <template v-slot:title>
  Succeed case study
  </template>
  <template v-slot:description>
  Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et neque.
  </template>
  </succeed-use-case>
</succeed-use-case-section>

  <testimonials-slider
  :slides="[
        {
          image: '/images/slide-item-1.jpg',
          description: 'Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n' +
          'Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n' +
          'ultrices integer urna, pharetra.',
          author: 'John Smith',
          position: 'Developer at Porto',
        },
    ]"
  />

  <get-started
  :sectionTitle="'Ready to explore?'"
  :sectionDescription="'Find our latest API documentation.'"
  :accentLink="{text: 'Start developing', link: '/examples'}"
  />
