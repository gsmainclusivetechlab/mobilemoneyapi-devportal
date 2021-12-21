<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## Testimonials

</div>
      <div class="testimonials__slider-wrapper">
<testimonials-slide imageLink="/images/test.jpg">
<template v-slot:description>
As a payment service provider that is directly integrated with over 35 MNO partners, we understand the importance of Standardised APIs to save time on development work, resources and keeping integrations up to date.
</template>
<template v-slot:company>Cellulant</template>
<template v-slot:organisation>Payment Service Provider</template>
<template v-slot:links>
<p><router-link to="/use-cases/merchant-payments/">Merchant Payments</router-link></p>
<p><router-link to="/use-cases/international-transfers/">International Transfers</router-link></p>
<p><router-link to="/use-cases/p-2-p-transfers/">P2P transfers</router-link></p>
</template>
</testimonials-slide>
          </div>
    </div>
  </section>
</template>
