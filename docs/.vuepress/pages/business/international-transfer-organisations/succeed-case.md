<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## API Case Study

</div>
      <case-study imageLink="/images/mama_money.png">
        <template v-slot:main-description>
The remittance provider completed its first direct integration with an MNO six years ago, and now currently integrated with multiple MNO partners. 
According to the provider, the direct API Integrations offer a higher level of convenience as the recipients do not have to go to physical locations to cash out. During the pandemic, it was difficult for some to access agents or banks and direct integrations speeded remittance transactions to end users.  
        </template>
        <template v-slot:first-description>
The organisation is currently looking to increase its MNO integration partners; however, some challenges are slowing down the speed of expansion. Recently, it experienced a length integration with a provider, taking nearly two years to complete.
        </template>
        <template v-slot:second-description>
Integrating with more providers will increase the reach of users. A Standardised API would be beneficial for the organisation as it will allow integrations with multiple MMPs in a seamless manner.
        </template>
        <template v-slot:title>
Mama Money
        </template>
        <template v-slot:use-case-links>
          <p><router-link to="/use-cases/international-transfers/">International Transfers</router-link></p>
        </template>
      </case-study>
    </div>
  </section>
</template>
