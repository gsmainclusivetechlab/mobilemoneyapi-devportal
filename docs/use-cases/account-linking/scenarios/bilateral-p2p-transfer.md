---
sidebarDepth: 2
pageClass: api-page has-code-panel has-back-btn
---

## Bilateral P2P Transfer

In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.

<mermaid>
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
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUy2" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLDt" target="_blank">Open Postman Collection with Authentication</a>
</div>

<side-code-panel>
  <code-group>
  <code-block title="View">

  <code-group>
  <code-block title="post">
  ```javascript
  function fancyAlert(arg) {
    if (arg) {
      $.facebox({div: '#foo'})
    }
  }
  ```
  </code-block>

  <code-block title="get">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  <code-block title="get">
  any content can be inserted here

  ::: v-pre
  `{{ Some pher information  }}`
  :::
  </code-block>
  </code-group>

  </code-block>

  <code-block title="Code">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  </code-group>

  <code-language-selector>
  <code-lang title="Vue">
  <code-group>
  <code-block title="View">

  <code-group>
  <code-block title="post">
  ```javascript
  function fancyAlert(arg) {
    if (arg) {
      $.facebox({div: '#foo'})
    }
  }
  ```
  </code-block>

  <code-block title="get">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  <code-block title="get">
  any content can be inserted here

  ::: v-pre
  `{{ Some pher information  }}`
  :::
  </code-block>
  </code-group>

  </code-block>

  <code-block title="Code">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  </code-group>
  </code-lang>

  <code-lang title="JavaScript">
  <code-group>
  <code-block title="View">

  <code-group>
  <code-block title="post">
  ```javascript
  function fancyAlert(arg) {
    if (arg) {
      $.facebox({div: '#foo'})
    }
  }
  ```
  </code-block>

  <code-block title="get">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  <code-block title="get">
  any content can be inserted here

  ::: v-pre
  `{{ Some pher information  }}`
  :::
  </code-block>
  </code-group>

  </code-block>

  <code-block title="Code">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  </code-group>
  </code-lang>

  <code-lang title="Java">
  <code-group>
  <code-block title="View">

  <code-group>
  <code-block title="post">
  ```javascript
  function fancyAlert(arg) {
    if (arg) {
      $.facebox({div: '#foo'})
    }
  }
  ```
  </code-block>

  <code-block title="get">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  <code-block title="get">
  any content can be inserted here

  ::: v-pre
  `{{ Some pher information  }}`
  :::
  </code-block>
  </code-group>

  </code-block>

  <code-block title="Code">
  ```php
  <?php
  echo str_word_count("PHP");
  ?> 
  ```
  </code-block>
  </code-group>
  </code-lang>
  </code-language-selector>
</side-code-panel>