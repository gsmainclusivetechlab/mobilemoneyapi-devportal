<template>
  <div class="faq">
    <search-section
        @on-search="searchString = $event">
      <template v-slot:title>
        FAQ
      </template>
      <template v-slot:description>
        Browse our frequently asked questions site from common
        questions as well as &quot;how to&quot; instructions.
      </template>
    </search-section>
    <div class="search-results-section">
      <div class="container container--narrow">
        <h2 v-show="notFoundResults" class="no-results text-center">No results found.</h2>
        <div v-show="!notFoundResults">
          <div class="faq-results__item" v-show="!containersVisible[1]">
            <h2 class="h2 faq-results__item-title">General</h2>
            <accordion ref="accordion-container-1">
              <accordion-item>
                <template v-slot:header>
                  What is the Mobile Money API?
                </template>
                <template v-slot:body>
                  The GSMA Mobile Money API is an initiative developed through collaboration between
                  the mobile money industry and the GSMA, which provides a harmonised API
                  Specification for all the common mobile money use cases which is both easy to use
                  and secure.
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Who created and maintains the Mobile Money API?
                </template>
                <template v-slot:body>
                  <div>
                    The API is a GSMA-led industry initiative, for and by the Mobile Money industry,
                    mobile money operators and their technology platform providers. It is maintained
                    by the GSMA working with the industry as it continues to evolve and grow.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Who can use the Mobile Money API?
                </template>
                <template v-slot:body>
                  <div>
                    The API is designed to be used by any party in the Mobile Money industry. This
                    includes Mobile Money Operators, other Payment Service Providers, Retail and
                    eCommerce Merchants, Application Developers, companies receiving Bill Payments,
                    and others.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Which use cases does the Mobile Money API support?
                </template>
                <template v-slot:body>
                  <div>
                    The GSMA Mobile Money API is an initiative developed through collaboration
                    between the mobile money industry and the GSMA, which provides a harmonised API
                    Specification for all the common mobile money use cases which is both easy to
                    use and secure.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  What are the advantages of the Mobile Money API?
                </template>
                <template v-slot:body>
                  <div>
                    Adoption of the Mobile Money API leads to key benefits including growth of your
                    mobile money ecosystem from faster partner on-boarding as partners will only
                    have to integrate to one common API. Adopting a harmonised API also leads to
                    easier maintenance and evolution of your common Mobile Money operations by
                    providing support for advanced features such as multi-wallets and batch
                    payments.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Is the GSMA Mobile Money API free to use?
                </template>
                <template v-slot:body>
                  <div>
                    Yes, the GSMA represents the interests of mobile operators worldwide, uniting
                    more than 750 operators with almost 400 companies in the broader mobile
                    ecosystem and the assets we maintain are there to support our members and our
                    industry. We encourage use of the harmonised API and place no restrictions on
                    its use.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Are there any alternative API standards?
                </template>
                <template v-slot:body>
                  <div>
                    There is no other harmonised API that supports the range of Mobile Money use
                    cases provided by the GSMA Mobile Money API.
                  </div>
                </template>
              </accordion-item>
            </accordion>
          </div>
          <div class="faq-results__item" v-show="!containersVisible[2]">
            <h2 class="h2 faq-results__item-title">Technical</h2>
            <accordion ref="accordion-container-2">
              <accordion-item>
                <template v-slot:header>
                  Which API Version should we implement?
                </template>
                <template v-slot:body>
                  The current version of the Mobile Money API is v1.1 and this version should be
                  implemented by all new adopters. We encourage existing adopters who have
                  implemented the previous version of the API to migrate to the latest version which
                  is backwards compatible.
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  How did you decide on which APIs to include in the current Specification?
                </template>
                <template v-slot:body>
                  <div>
                    The current set of APIs have been selected to cover the most common mobile money
                    use cases that are used in the industry today.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Can I implement only some of the APIs and still conform to the API Specification?
                </template>
                <template v-slot:body>
                  <div>
                    Yes, you can implement only the APIs which are relevant for your business.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Is the Mobile Money API easy to implement?
                </template>
                <template v-slot:body>
                  <div>
                    Yes, the Mobile Money API is simple to implement as the API is based upon
                    REST/JSON which is used extensively by the developer community, and most of the
                    APIs are simply defined and only require a small number of mandatory fields.
                    Developers can additionally use Swagger Codegen to rapidly generate Mobile Money
                    API stubs for development and testing, and the GSMA can also support you in
                    implementing the API.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Why are only REST and JSON supported over other API designs and data formats?
                </template>
                <template v-slot:body>
                  <div>
                    The design decision was based on REST and JSON being the best options for an API
                    in terms of simplicity, ease of development, and because they are the most
                    commonly used and understood architecture and data format today for all kinds of
                    APIs.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Why was OAS chosen as the API definition framework over other API frameworks?
                </template>
                <template v-slot:body>
                  <div>
                    OAS was chosen as it provides the best modelling flexibility and includes a
                    comprehensive toolset to facilitate API implementation including client and
                    server side SDKs.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Does the API support synchronous and asynchronous patterns?
                </template>
                <template v-slot:body>
                  <div>
                    Yes, the API supports synchronous and asynchronous patterns for resource
                    creation and update requests, and synchronous patterns only for read requests,
                    which provides support for the most commonly used request paradigms.
                  </div>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Can you add support for a Mobile Money use case which is not included in the
                  Specification?
                </template>
                <template v-slot:body>
                  <div>
                    Please contact us to let us know if you use APIs which are not currently
                    included in the API Specification. We have a living roadmap and will continue to
                    update the Spec over time.
                  </div>
                </template>
              </accordion-item>
            </accordion>
          </div>
          <div class="faq-results__item" v-show="!containersVisible[3]">
            <h2 class="h2 faq-results__item-title">Security</h2>
            <accordion ref="accordion-container-3">
              <accordion-item>
                <template v-slot:header>
                  Are there security recommendations to consider when implementing the Mobile Money
                  API?
                </template>
                <template v-slot:body>
                  Yes, we provide a comprehensive set of security guidelines, please see our latest
                  Security Design and Implementation guidelines in the Developer Portal here.
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:header>
                  Do I need to implement an API Gateway to host the Mobile Money API?
                </template>
                <template v-slot:body>
                  <div>
                    No. However we recommend you use an API Gateway as this enables efficient
                    developer on-boarding processes, making the implementation process simpler and
                    allowing third parties to more rapidly exploit the benefits of the API. Off the
                    shelf API Gateways do support the Mobile Money API security guidelines,
                    including OAuth2.
                  </div>
                </template>
              </accordion-item>
            </accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//
//import searchSection from '../.vuepress/components/search-section.vue';
//
//import faqData from '../.vuepress/data/faqData';
//import accordion from '../.vuepress/components/simple-accordion/accordion.vue';
//import accordionItem from '../.vuepress/components/simple-accordion/accordion-item.vue';
import searchSection from './search-section.vue';
import faqData from '../data/faqData';
import accordion from './simple-accordion/accordion.vue';
import accordionItem from './simple-accordion/accordion-item.vue';

export default {
  name: 'faq-page',
  components: {
    accordion,
    accordionItem,
    searchSection,
  },

  data() {
    return {
      faqDataSource: null,
      filteredDaqData: {},
      notFoundResults: false,
      notFoundResult1s: {
        container1: false,
        container2: false,
        container3: false,
      },
      searchString: '',
      containersVisible: {
        1: false,
        2: false,
        3: false
      }
    }
  },
  created() {
    this.faqDataSource = faqData;
  },
  mounted() {
    this.applyFilter();
  },
  watch: {
    searchString(val) {
      this.applyFilter(val)
    }
  },
  methods: {
    applyFilter() {
      const container1 = this.$refs['accordion-container-1'].$children;
      const container2 = this.$refs['accordion-container-2'].$children;
      const container3 = this.$refs['accordion-container-3'].$children;
      const containers = [...container1, ...container2, ...container3];

      containers.forEach(el => {
        el.showElement = !el.$el.innerText.toLowerCase().includes(this.searchString.toLowerCase());
      });

      this.notFoundResults = !!containers?.every(el => el.showElement);
    },
    hiddenTitle() {
      this.containersVisible[1] = this.$refs['accordion-container-1']?.$children?.every(el =>
          el.showElement)
      this.containersVisible[2] = this.$refs['accordion-container-2']?.$children?.every(el =>
          el.showElement)
      this.containersVisible[3] = this.$refs['accordion-container-3']?.$children?.every(el =>
          el.showElement)
    }
  }
}
</script>
