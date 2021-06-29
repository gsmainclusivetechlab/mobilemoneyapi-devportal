---
sidebarDepth: 0
pageClass: api-page has-code-panel
---

## ‘On-us’ P2P Transfer Initiated by a Third Party Provider

In this diagram, A third party provider enables a sender to transfer money to a recipient in the same FSP. The third party provider (1) confirms the recipient name, (2) requests a quotation and (3) performs the transfer with the FSP. A callback is provided by the FSP to return confirmation of the transfer.

<mermaid>
  sequenceDiagram
    participant Third Party Provider
    participant FSP
    Third Party Provider->>FSP: GET /accounts/{identifierType}/{identifier}/accountname
    activate Third Party Provider
    activate FSP
    Note right of FSP: (1) The Third Party Provider retrieves the name of the<br>intended recipient from the FSP.
    FSP-->>Third Party Provider: HTTP 200 (Account Holder Name Object)
    deactivate Third Party Provider
    deactivate FSP
    Third Party Provider->>FSP: POST /quotations
    activate Third Party Provider
    activate FSP
    Note right of FSP: (2) Subject to sender confirmation, the Third Party Provider<br>submits a quotation request. The FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Third Party Provider-->>FSP: HTTP 202 (Request State Object)
    deactivate Third Party Provider
    deactivate FSP
    FSP->>Third Party Provider: PUT {Callback URL} (Quotations Object)
    activate Third Party Provider
    activate FSP
    Note right of FSP: (3) The FSP in turn informs the Third Party Provider that<br>the quotation has been successfully completed by<br>returning the final representation of the quotation.
    Third Party Provider-->>FSP: HTTP 204
    deactivate Third Party Provider
    deactivate FSP
    Third Party Provider->>FSP: POST /transactions/type/transfer
    activate Third Party Provider
    activate FSP
    Note right of FSP: (4) Subject to sender confirmation, the Third Party Provider<br>submits a transfer request. The FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Third Party Provider-->>FSP: HTTP 202 (Request State Object)
    deactivate Third Party Provider
    deactivate FSP
    FSP->>Third Party Provider: PUT {Callback URL} (Transactions Object)
    activate Third Party Provider
    activate FSP
    Note right of FSP: (5) The FSP in turn informs the Third Party Provider that<br>the transaction has been successfully completed by<br>returning the final representation of the transaction.
    Third Party Provider-->>FSP: HTTP 204
    deactivate Third Party Provider
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUy4" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfrY" target="_blank">Open Postman Collection with Authentication</a>
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