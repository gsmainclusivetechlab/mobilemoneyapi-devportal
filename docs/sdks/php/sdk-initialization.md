---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-php-sdk" target="_blank">mmapi-php-sdk</a>:

```shell
git clone git@github.com:gsmainclusivetechlab/mmapi-php-sdk.git -b develop
export MMAPI_PHP_SDK=$(pwd)/mmapi-php-sdk
cd $MMAPI_PHP_SDK
```

2. Install <a href="https://getcomposer.org/download/" target="_blank">Composer</a>.

3. From the root of the <span class="highlight">mmapi-php-sdk</span> project, type:

```shell
composer install
```

4. Copy <span class="highlight">config.env.sample</span> to <span class="highlight">config.env</span> and replace <span class="highlight"><consumer_key></span> , <span class="highlight"><consumer_secret></span> and <span class="highlight"><api_key></span> with the values taken from your mmapi developer account. Also replace <span class="highlight"><callback_url></span> with the value according to your environment.</span>

```shell
consumer_key=<consumer_key>
consumer_secret=<consumer_secret>
api_key=<api_key>
callback_url=<callback_url>
```

5. Sample code to initialise PHP SDK:

```php
<?php
//require the autoload file
require dirname(__DIR__, 1) . '/autoload.php';

//Parse the config file
$env = parse_ini_file(__DIR__ . '../../config.env');

use mmpsdk\\Common\\Constants\\MobileMoney;
use mmpsdk\\Common\\Enums\\SecurityLevel;
use mmpsdk\\Common\\Exceptions\\SDKException;

//Initialize SDKa
try {
  MobileMoney::initialize(
      MobileMoney::SANDBOX,
      $env['consumer_key'],
      $env['consumer_secret'],
      $env['api_key']
  );
  MobileMoney::setCallbackUrl($env['callback_url']);
  MobileMoney::setSecurityLevel(SecurityLevel::DEVELOPMENT);
} catch (SDKException $exception) {
  prettyPrint($exception->getMessage());
}

function prettyPrint($data)
{
  echo PHP_EOL . print_r($data, true) . PHP_EOL;
}

print("Consumer Key : " . MobileMoney::getConsumerKey() . PHP_EOL);
print("Consumer Secret : " . MobileMoney::getConsumerSecret() . PHP_EOL);
print("API Key : " . MobileMoney::getApiKey() . PHP_EOL);
print("Environment : " . MobileMoney::getEnvironment() . PHP_EOL);
print("Security Level : " . MobileMoney::getSecurityLevel() . PHP_EOL);
print("Callback URL : " . MobileMoney::getCallbackUrl() . PHP_EOL);
print("MMAPI URL : " . MobileMoney::getBaseUrl() . PHP_EOL);
?>
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
