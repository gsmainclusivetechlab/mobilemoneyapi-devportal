<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">

## Explore what’s possible

<div class="section-description">
            How can the GSMA API support your business?  Explore potential use cases for your industry.
          </div>
        </div>
        <div class="section-intro__column">
          <router-link
              v-if="!target"
              :to="link"
              class="industries-card"
          >
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': iconBackground}">
                <img :src="icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">Mobile Money Providers</h5>
            <div class="industries-description">Use the GSMA API to connect with many third party service providers</div>
            <div class="btn btn--transparent">Learn more</div>
          </router-link>
          <a v-else :href="link" class="industries-card" target="_blank">
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': iconBackground}">
                <img :src="icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">Mobile Money Provider</h5>
            <div class="industries-description">Use the GSMA API to accept in-store and online payments from your customers</div>
            <div class="btn btn--transparent">Learn more</div>
          </a>
        </div>
      </div>
      <div class="industries-grid">
        <div class="cards-grid">
          <div class="cards-grid__item">
            <router-link
                to="/merchants-and-service-providers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#EE3772">
                  <img src="/images/industry-2.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Merchants & Service Providers</h5>
              <div class="industries-description">Use the GSMA API to accept in-store and online payments from your customers</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/governments/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FCBB2C">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Governments</h5>
              <div class="industries-description">Use the GSMA API specification to facilitate G2P cash disbursements</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/humanitarian-agencies/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A182">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Humanitarian Agencies</h5>
              <div class="industries-description">Use the GSMA API to optimise the delivery of cash disbursements</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/international-transfer-organisations/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A6C9">
                  <img src="/images/industry-4.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">International Transfer Organisations</h5>
              <div class="industries-description">Use the GSMA API to integrate with mobile money wallets and transfer money across international borders</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/payment-service-providers-and-payment-aggregators/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FF6600">
                  <img src="/images/industry-5.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Payment Service Providers & Payment Aggregators</h5>
              <div class="industries-description">Use the GSMA API when working at large scale with multiple APIs using a single connection point</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/banks-microfinance-institutions/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#95226C">
                  <img src="/images/industry-1.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Banks & Microfinance Institutions</h5>
              <div class="industries-description">Use the GSMA API to integrate provision of financial services such as loans and savings to customers with mobile money wallets</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/fintech-providers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#99CCCC">
                  <img src="/images/industry-5.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">FinTech Providers (Insurance Savings Loans)</h5>
              <div class="industries-description">Use the GSMA API to enable customers to pay bills and set up subscriptions for services such as insurance and other digital financial services</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/employers/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#00A6C9">
                  <img src="/images/industry-1.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Employers</h5>
              <div class="industries-description">Use the GSMA API to distribute salaries to their employees directly via their mobile phones</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/energy-utilities-agritech/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#FF6600">
                  <img src="/images/industry-2.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Energy & Utilities & AgriTech</h5>
              <div class="industries-description">Use the GSMA API to automate processing of customers’ bill payments</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/education-and-health/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#95226C">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Education & Health</h5>
              <div class="industries-description">Use the GSMA API to simplify acceptance of payments from clients for essential services</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
          <div class="cards-grid__item">
            <router-link
                to="/mobile-money-agents/"
                class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" style="background-color:#99CCCC">
                  <img src="/images/industry-3.svg" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">Mobile Money Agents</h5>
              <div class="industries-description">Use the GSMA API to provide services registration of new accounts and cash-in and cash-out from their account</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
