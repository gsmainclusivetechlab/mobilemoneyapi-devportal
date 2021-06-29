---
sidebarDepth: 0
pageClass: api-page has-code-panel
---

## P2P Transfer via Switch

In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and  and to(3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.

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
    Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been<br>successfully completed by returning the final representation of the<br>transaction.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)
    Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed<br>by returning the final representation of the transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdjZhR" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLNf" target="_blank">Open Postman Collection with Authentication</a>
</div>

<side-code-panel>

  ## P2P Transfer via Switch

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

  Short description: In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to(3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.

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