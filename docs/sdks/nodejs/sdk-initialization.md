---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-nodejs-sdk" target="_blank">mmapi-nodejs-sdk</a>:

```shell
git clone git@github.com:gsmainclusivetechlab/mmapi-nodejs-sdk.git -b develop
export MMAPI_NODEJS_SDK=$(pwd)/mmapi-nodejs-sdk
cd $MMAPI_NODEJS_SDK
```

2. Create the file <span class="highlight">config.env</span> with all the environment variables needed to run the SDK. Replace <span class="highlight"><consumer_key></span> , <span class="highlight"><consumer_secret></span> and <span class="highlight"><api_key></span> with the values taken from your mmapi developer account. Also replace <span class="highlight"><callback_url></span> with the value according to your environment.</span>

```shell
export CONSUMER_KEY=<consumer_key>
export CONSUMER_SECRET=<consumer_secret>
export API_KEY=<api_key>
export CALLBACK_URL=<callback_url>
export SECURITY_OPTION=DEVELOPMENT_LEVEL
```

3. Load the config.env environment variables with the following command:

```shell
source config.env
```

4. Sample code to initialise the node-js SDK:

```javascript
/**
* MMAPI Node.js SDK dependency
*/
const mmapi = require('../lib/index');
/**
* Set up and return MMAPI Noe.js SDK environment.
*/
const consumerKey = process.env.CONSUMER_KEY
const consumerSecret = process.env.CONSUMER_SECRET;
const apiKey = process.env.API_KEY;
const securityOption = process.env.SECURITY_OPTION; // optional DEVELOPMENT_LEVEL, STANDARD_LEVEL, ENHANCED_LEVEL
const callbackUrl = process.env.CALLBACK_URL;
let environment;

if (process.env.NODE_ENV === 'production') {
  environment = new mmapi.core.LiveEnvironment(consumerKey, consumerSecret, apiKey, securityOption, callbackUrl);
}

environment = new mmapi.core.SandboxEnvironment(consumerKey, consumerSecret, apiKey, securityOption, callbackUrl);

/**
* Returns MMAPI Node.js SDK HTTP client instance with environment.
* Use this instance to invoke MMAPI APIs
*/
let client = new mmapi.core.MobileMoneyApiHttpClient(environment);

console.log("Consumer Key : " + client.environment.consumerKey)
console.log("Consumer Secret : " + client.environment.consumerSecret)
console.log("API Key : " + client.environment.apiKey)
console.log("Environment : " + client.environment.environment)
console.log("Security Level : " + client.environment.securityOption)
console.log("Callback URL : " + client.environment.callbackUrl)
console.log("MMAPI URL : " + client.environment.baseUrl)
```

<script>
export default {
  mounted() {
    setTimeout(() => {
      const codeBlocks = Array.from(document.querySelectorAll('.extra-class'));
    
      codeBlocks.forEach(element => {
        const preElement = element.querySelector('pre');

        const div = document.createElement('div');
        div.classList.add('pre-wrapper');
        div.appendChild(preElement);

        element.appendChild(div);
      });
    }, 0);
  },
}
</script>