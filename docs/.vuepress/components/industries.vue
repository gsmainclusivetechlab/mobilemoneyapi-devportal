<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">
          <h2 class="h2 section-title">
            Explore what’s possible
          </h2>
          <div class="section-description">
            Bibendum integer quam sem purus donec. Morbi volutpat euismod cras convallis quam.
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
            <h5 class="industries-title">Mobile Money Provider</h5>
            <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
            <div class="btn btn--transparent">Learn more</div>
          </router-link>

          <a v-else :href="link" class="industries-card" target="_blank">
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': iconBackground}">
                <img :src="icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">Mobile Money Provider</h5>
            <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
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
              <div class="industries-description">Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.</div>
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
              <div class="industries-description">Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.</div>
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
              <div class="industries-description">Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.</div>
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
              <div class="industries-description">Fringilla egestas ut sit odio hendrerit in quis purus in. Molestie euismod cras dis neque eget urna eget amet enim.</div>
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
              <div class="industries-description">At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.</div>
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
              <div class="industries-description">At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.</div>
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
              <div class="industries-description">Et vel tincidunt ipsum eleifend nisi. Ipsum sapien neque pellentesque nec nibh tellus scelerisque ut lectus.</div>
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
              <div class="industries-description">Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.</div>
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
              <div class="industries-description">Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.</div>
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
              <div class="industries-description">Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.</div>
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
              <div class="industries-description">Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "industries",
  data () {
    return {
      target: false,
      link: '/mobile-money-providers/',
      icon: '/images/industry-1.svg',
      iconBackground: '#DE002B'
    }
  }
}
</script>
