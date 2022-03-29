<div class="faq-results__item" v-show="!containersVisible[2]">

## Technical

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
