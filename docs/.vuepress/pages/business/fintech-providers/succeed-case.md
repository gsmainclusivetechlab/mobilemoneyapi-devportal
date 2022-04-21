<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## API Case Study

</div>
      <case-study imageLink="/images/test.jpg">
        <template v-slot:main-description>
The third party provides inclusive insurance services to multiple countries within the Sub-Saharan region. Services available include health, life, funeral and property insurance. The insurance provider is currently directly integrated with five MMPs, and working on expanding integrations with other MMPs. Working with MMPs, is expanding the reach of the insurance provider as the MMPs’ distributions tend to be higher, enabling the insurer to distribute services to consumers that have been traditionally excluded.
        </template>
        <template v-slot:first-description>
The drawback for the third-party insurance provider when dealing with multiple MMP integrations has included maintenance, costs and speed of integrations as the expectations tend to vary on a partner basis.
        </template>
        <template v-slot:second-description>
To continue reaching low income people, the insurance provider would benefit from integrating with a larger range of MMPs, enabling higher distribution. In addition, offering insurance as part of a bundle package can also increase mobile money usage as MMPs can cross-sell other services. 
Currently, there is no Standardised API available for the Insurance Provider; however, having access to one will enable it to offer inclusive insurance to a wider range of users, particularly those in remote areas.
        </template>
        <template v-slot:title>
Inclusivity
        </template>
        <template v-slot:org-type>
Insurance Provider
        </template>
        <template v-slot:use-case-links>
          <p><router-link to="/use-cases/bill-payments/">Bill Payments</router-link></p>
          <p><router-link to="/use-cases/recurring-payments/">Recurring Payments</router-link></p>
        </template>
      </case-study>
    </div>
  </section>
</template>
