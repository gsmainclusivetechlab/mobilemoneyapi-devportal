---
pageClass: industry-page custom
title: Governments
---

<IndustryHeroSection :imageSrc="'/images/industry-hero.jpg'" :imageAlt="'image alt'">
  <template v-slot:title>
  Governments
  </template>    
  <template v-slot:description>
  In the future, the great government transition will expect FM providers and other private sector 
  organizations to take the lead in creating change.
  </template>    
</IndustryHeroSection>

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
        <TabSection v-show="isActiveTab('P2P Transfers')">
          <div class="text-box">
            <p>The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer
              funds from an account holding individual to another account holding individual or to a non-account
              holding individual (known as an unregistered customer). The API supports a wide number of financial
              service providers including mobile money providers, banks, and micro-finance institutions.
              The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’
              P2P transfers (accounts held in different FSPs).
              Bilateral and Switch-based transfers can be supported.
            </p>
            <p>For further reading, please refer to the following:</p>
            <ul class="dotted-list">
              <li><b>Getting Started.</b> Specifies the design principles, behaviours, and error handling of the Mobile Money API.</li>
              <li><b>API Service Definition.</b> Documents all Mobile Money API endpoints, fields, objects, and enumerations.</li>
            </ul>
            <p>
              All documentation can be found on the
              <a href="https://developer.mobilemoneyapi.io/" target="_blank" class="external">GSMA Mobile Money API Developer Portal.</a>
            </p>
            <router-link class="btn btn--transparent" to="#">
              Start developing
            </router-link>
          </div>
          <h3 class="h3">Use case scenarios</h3>
          <accordion>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer via Switch
              </template>
              <template v-slot:body>
                <p>In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.</p>

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Switch
    participant Receiving FSP
    Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.
    Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
    Receiving FSP-->>Switch: HTTP 200 (Account Holder Name Object)
    Switch-->>Sending FSP: HTTP 200 (Account Holder Name Object)
    deactivate Sending FSP
    deactivate Switch
    deactivate Receiving FSP
    Sending FSP->>Switch: POST /quotations
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation<br>request to the Switch. The Switch will return the Request State object to indicate that the request<br>is 'pending'.
    Switch->>Receiving FSP: POST /quotations
    Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP.<br>The Receiving FSP will return the Request State object to indicate<br>that the request is 'pending'.
    Receiving FSP-->>Switch: HTTP 200 (Request State Object)
    Switch-->>Sending FSP: HTTP 200 (Request State  Object)
    deactivate Sending FSP
    deactivate Switch
    Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully<br>created by returning the final representation of the quotation.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)
    Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted<br>by returning the final representation of the transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
    Sending FSP->>Switch: POST /transactions/type/transfer
    activate Switch
    activate Sending FSP
    activate Receiving FSP
    Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch<br>will return the Request State object to indicate that the request is 'pending'.
    Switch->>Receiving FSP: POST /transactions/type/transfer
    Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the<br>Receiving FSP. The Receiving FSP will return the Request State object<br>to indicate that the request is 'pending'.
    Receiving FSP-->>Switch: HTTP 202 (Request State Object)
    Switch-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Switch
    deactivate Sending FSP
    Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been <br> successfully completed by returning the final representation of the<br>transaction.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)
    Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed<br>by returning the final representation of the transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
</mermaid>

</template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Bilateral P2P Transfer
              </template>
              <template v-slot:body>
                <p>In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.</p>
                <Mermaid>
                  sequenceDiagram
                  participant Sending FSP
                  participant Receiving FSP
                  Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
                  activate Sending FSP
                  activate Receiving FSP
                  Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.
                  Receiving FSP-->>Sending FSP: HTTP 200 (Account Holder Name Object)
                  deactivate Receiving FSP
                  Sending FSP->>Receiving FSP: POST /transactions/type/transfer
                  activate Receiving FSP
                  Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. <br>The Receiving FSP will return the Request State object to indicate that the request is "pending".
                  Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
                  deactivate Sending FSP
                  deactivate Receiving FSP
                  Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)
                  activate Sending FSP
                  activate Receiving FSP
                  Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed<br>by returning the final representation of the transaction.
                  Sending FSP-->>Receiving FSP: HTTP 204
                  deactivate Sending FSP
                  deactivate Receiving FSP
                </Mermaid>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                'On-us' P2P Transfer Initiated by a Third Party Provider
              </template>
              <template v-slot:body>
                <p>"'On-us' P2P Transfer Initiated by a Third Party Provider" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer Failure
              </template>
              <template v-slot:body>
                <p>"P2P Transfer Failure" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer Reversal
              </template>
              <template v-slot:body>
                <p>"P2P Transfer Reversal" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Obtain an FSP Balance
              </template>
              <template v-slot:body>
                <p>"Obtain an FSP Balance" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Retrieve Transactions for an FSP
              </template>
              <template v-slot:body>
                <p>"Retrieve Transactions for an FSP" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer via Switch
              </template>
              <template v-slot:body>
                <p>"Check for Service Availability" item content will be here</p>
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Retrieve a Missing API Response
              </template>
              <template v-slot:body>
                <p>"Retrieve a Missing API Response" item content will be here</p>
              </template>
            </accordion-item>
          </accordion>
        </TabSection>
        <TabSection v-show="isActiveTab('Disbursements')">
          tab content will be here (2)
        </TabSection>
        <TabSection v-show="isActiveTab('Bill Payments')">
          tab content will be here (7)
        </TabSection>
      </div>
    </div>
  </div>
</template>

<template>
  <section class="special-grid-section section--m-gap">
    <div class="container container--narrow">
      <div class="special-grid__container">
        <div class="special-grid__block">
          <div class="special-grid__image-holder">
            <img src="/images/succeed-use-case.jpg" alt="image alt">
          </div>
          <div class="special-grid__content-holder">
            <div class="section-intro__column">

## Succeed case study

<div class="section-description">
                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere
                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et
                neque.
              </div>
              <ul class="case-list">
                <li class="case-list__item">
                  <div class="bullet" style="color: #00568F"></div>
                  Increased conversion
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #FF6600"></div>
                  Important point
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #00A182"></div>
                  Reduced errors
                </li>
                <li class="case-list__item">
                  <div class="bullet" style="color: #FCBB2C"></div>
                  Important point
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## Testimonials

</div>
      <div class="testimonials__slider-wrapper">
        <VueSlickCarousel
            v-bind="options"
            ref="slider">
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
                <div class="testimonials__description">
                  <p>Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.
                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices
                    ultrices integer urna, pharetra.</p>
                </div>
                <div class="testimonials__author">
                  <span class="testimonials__author--name">
                    John Smith
                  </span>
                  <span class="testimonials__author--position">
                    Developer at Porto
                  </span>
                </div>
              </div>
              <div class="testimonials__image-holder">
                <div class="testimonials__image-holder--container">
                  <div class="testimonials__icon-holder">
                    <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                  </div>
                  <img src="/images/slide-item-1.jpg" alt="John Smith">
                </div>
              </div>
            </div>
          </div>
          <template v-slot:prevArrow>
            <div class="testimonials__arrow testimonials__arrow-prev">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
          <template v-slot:nextArrow>
            <div class="testimonials__arrow testimonials__arrow-next">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import TabSection from "../.vuepress/components/TabSection";
import Accordion from "../.vuepress/components/simple-accordion/accordion";
import AccordionItem from "../.vuepress/components/simple-accordion/accordion-item";

export default {
  components: {
    VueSlickCarousel, AccordionItem, Accordion, TabSection
  },
  data() {
    return {
      options: {
        dots: true,
        arrows: true,
        dotsClass: 'testimonials__dots',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
      },
      borderedLink: false,
      accentLink: {
        text: 'Start developing',
        link: '/examples'
      },
      tabs: [
          'P2P Transfers',
          'Disbursements',
          'Bill Payments'
      ],
      activeTabName: '',
    }
  },
  created() {
    this.activeTabName = this.tabs.length ? this.tabs[0] : ''
  },
  methods: {
    handleTabSwitch(tabName) {
      this.activeTabName = tabName;
    },
    isActiveTab(title) {
      return title === this.activeTabName
    },
  }
}
</script>

<template>
  <section class="get-started-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Ready to explore?

<div class="section-description">Find our latest API documentation.
        </div>
      </div>
      <div class="buttons-holder content-center get-started__btn-holder">
        <router-link
            v-if="borderedLink"
            :to="borderedLink.link"
            class="btn"
        > {{ borderedLink.text }}
        </router-link>
        <router-link
            v-if="accentLink"
            :to="accentLink.link"
            class="btn btn--accent"
        > {{ accentLink.text }}
        </router-link>
      </div>
    </div>
  </section>
</template>
