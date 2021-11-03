<template>
  <div class="use-cases-tabs-section tabs-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro">

## Use cases

</div>
      <div class="tabs-buttons">
        <button
            v-for="(tab, index) in tabs"
            :key="`tab-button-${index}`"
            type="button"
            class="btn btn-bordered"
            :class="{
            'btn--accent': isActiveTab(tab),
            'btn--inactive': !isActiveTab(tab),
          }"
            @click="handleTabSwitch(tab)"
        >
          {{ tab }}
        </button>
      </div>
      <div class="tabs-holder">
        <TabSection v-show="isActiveTab('Agent Services')">
          <div class="text-box">
            <p>The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile
              money customers. Supported payment mechanisms include:</p>
            <p><b>Payee-initiated merchant payment.</b> The merchant initiates the payment and the
              payer is requested to authenticate to confirm acceptance by the mobile money provider.
              <br>
              <b>Payer-initiated merchant payment.</b> The payer initiates the payment by specifying
              the merchant that is to be paid.
              <b>Merchant payment via pre-authorised payment code.</b> The payer generates a payment
              authorisation code up to a maximum payment amount. The merchant then enters or scans
              (if rendered as a QR code) the payer’s code to perform the payment.</p>
            <router-link class="btn btn--transparent" to="#">
              Start developing
            </router-link>
          </div>
        </TabSection>
      </div>
    </div>
  </div>
</template>
