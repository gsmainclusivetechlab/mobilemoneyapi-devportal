<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## Succeed case study

</div>
      <case-study imageHeight='150px' imageLink="/images/Engie.png">
        <template v-slot:main-description>
As an energy provider whose business is mainly in rural areas, partnerships with MNOs are of extreme importance to its operations. Mobile Money is regarded an enabler of its business.
Most of the third-party service provider’s consumers are pay-as-you go customers and by being directly integrated with over 10 MNO partners, it facilitates faster and smoother payments.
        </template>
        <template v-slot:first-description>
Although the process of direct integrations has improved since its first integration over seven years ago, the provider are still experiences some challenges when integrating with new partners, particularly the length of integration.
The energy provider has previously considered using aggregators; however, the costs proved to be significantly high.
        </template>
        <template v-slot:second-description>
The business has stated it would be beneficial to use a Standardised API, as will allow the provider to connect with more MNOs and expand services it offers at a faster rate. One of the provider’s struggles has been maintaining the multiple MNO API connections, which can be minimised by using a Standard API. 
        </template>
        <template v-slot:title>
Engie
        </template>
        <template v-slot:org-type>
Energy Provider
        </template>
        <template v-slot:use-case-links>
          <p><router-link to="/use-cases/bill-payments/">Bill Payments</router-link></p>
          <p><router-link to="/use-cases/recurring-payments/">Recurring Payments</router-link></p>
          <p><router-link to="/use-cases/disbursements/">Disbursements</router-link></p>
        </template>
      </case-study>
    </div>
  </section>
</template>
