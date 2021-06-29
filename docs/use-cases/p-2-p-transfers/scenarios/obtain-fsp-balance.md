---
sidebarDepth: 0
pageClass: api-page has-code-panel
---

## Obtain an FSP Balance

<mermaid>
  sequenceDiagram
    participant Requesting FSP
    participant FSP
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/balance
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) Obtain the balance of the<br>Requesting FSP's account.
    FSP-->>Requesting FSP: HTTP 200 (Balance Object)
    deactivate Requesting FSP
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3U" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL9M" target="_blank">Open Postman Collection with Authentication</a>
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