<div class="faq-results__item" v-show="!containersVisible[3]">

## Security

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
