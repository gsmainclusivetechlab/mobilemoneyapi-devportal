---
sidebarDepth: 0
pageClass: api-page has-code-panel
---

## P2P Transfer Reversal

In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: POST /transactions/{original transaction reference}/reversals
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP submits the reversal request for<br>processing to the Receiving FSP - passing the reference of<br>the transaction that is to bve reversed. The Receiving FSP<br>will return the Request State object to indicate the the<br>request is "pending".
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Reversal Object)
    Note right of Receiving FSP: (2) The Receiving FSP informs the Sending FSP<br>that the reversal has been successully<br>completed by returning the final representation<br>of the reversal transaction.
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3P" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfUV" target="_blank">Open Postman Collection with Authentication</a>
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