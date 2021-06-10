<template>
  <div
    class="use-case-tab tabs__item"
    :class="{'tabs__item--active': isActive}"
  >
    <div class="tab-content">
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
        
        <router-link :to="'#'">
          Start developing
        </router-link>
      </div>

      <h3 class="h3">Use case scenarios</h3>

      <accordion>
        <accordion-item>
          <template #heaeder>
            P2P Transfer via Switch
          </template>
          <template #body>
            <p>"P2P Transfer via Switch" item content will be here</p>
          </template>
        </accordion-item>

        <accordion-item>
          <template #heaeder>
            Bilateral P2P Transfer
          </template>
          <template #body>
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
        
        <accordion-item>
          <template #heaeder>
            'On-us' P2P Transfer Initiated by a Third Party Provider
          </template>
          <template #body>
            <p>"'On-us' P2P Transfer Initiated by a Third Party Provider" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            P2P Transfer Failure
          </template>
          <template #body>
            <p>"P2P Transfer Failure" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            P2P Transfer Reversal
          </template>
          <template #body>
            <p>"P2P Transfer Reversal" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            Obtain an FSP Balance
          </template>
          <template #body>
            <p>"Obtain an FSP Balance" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            Retrieve Transactions for an FSP
          </template>
          <template #body>
            <p>"Retrieve Transactions for an FSP" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            P2P Transfer via Switch
          </template>
          <template #body>
            <p>"Check for Service Availability" item content will be here</p>
          </template>
        </accordion-item>
        
        <accordion-item>
          <template #heaeder>
            Retrieve a Missing API Response
          </template>
          <template #body>
            <p>"Retrieve a Missing API Response" item content will be here</p>
          </template>
        </accordion-item>
        
      </accordion>
    </div>
  </div>
</template>

<script>

import accordion from '../simple-accordion/accordion.vue';
import accordionItem from '../simple-accordion/accordion-item.vue';
import Mermaid from '../Mermaid.vue';

export default {
  name: 'merchant-payments-case-tab',
  props: [
    'isActive',
  ],

  components: {
    accordion,
    accordionItem,
    Mermaid,
  },

  data: function() {
    return {
      tabTitle: 'P2P Transfers', // tabTitle is required (tabs buttons will be generatet with this string)
    }
  }
};
</script>
