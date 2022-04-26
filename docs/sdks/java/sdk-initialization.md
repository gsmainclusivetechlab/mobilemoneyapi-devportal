---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-java-sdk" target="_blank">mmapi-java-sdk</a>:

```shell
git clone git@github.com:gsmainclusivetechlab/mmapi-java-sdk.git -b develop
export MMAPI_JAVA_SDK=$(pwd)/mmapi-java-sdk
cd $MMAPI_JAVA_SDK
```

2. Create the file <span class="highlight">config.properties</span> inside the directories <span class="highlight">$MMAPI_JAVA_SDK/mmapi-java-sdk/src/test/resources</span>
and <span class="highlight">$MMAPI_JAVA_SDK/mmapi-java-sdk-samples/resources</span>.

```shell
touch $MMAPI_JAVA_SDK/mmapi-java-sdk/src/test/resources/config.properties
touch $MMAPI_JAVA_SDK/mmapi-java-sdk-samples/resources/config.properties
```

3. Replace <span class="highlight"><consumer_key></span> , <span class="highlight"><consumer_secret></span> and <span class="highlight"><api_key></span> with the values taken from your mmapi developer account. Also replace <span class="highlight"><callback_url></span> with the value according to your environment.</span>

```shell
CONSUMER_KEY=<consumer_key>
CONSUMER_SECRET=<consumer_secret>
API_KEY=<api_key>
CALLBACK_URL=<callback_url>
```

4. Sample code to initialise Java SDK:

```java
package sdkinit;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.mobilemoney.common.constants.Environment;
import com.mobilemoney.base.constants.SecurityLevel;
import com.mobilemoney.base.constants.Constants;
import com.mobilemoney.base.context.MMClient;

public class SDKInit {
  private static Properties properties;
  static {
    try (InputStream input = new FileInputStream("resources/config.properties")) {
      properties = new Properties();
      properties.load(input);
    } catch (IOException io) {
    }
  }

  public static String get(String key) {
    return properties.getProperty(key);
  }

  /***
  *
  * @param args
  */
  public static void main(String... args) {
    /***
    * instance of MMClient Class
    */
    MMClient mmClient = new MMClient(
                  get("CONSUMER_KEY"),
                  get("CONSUMER_SECRET"),
                  get("API_KEY"),
                  Environment.SANDBOX,
                  SecurityLevel.DEVELOPMENT);
                  
    System.out.println("Consumer Key : " + get("CONSUMER_KEY"));
    System.out.println("Consumer Secret : " + get("CONSUMER_SECRET"));
    System.out.println("API Key : " + get("API_KEY"));
    System.out.println("Environment : " + Environment.SANDBOX);
    System.out.println("Security Level : " + SecurityLevel.DEVELOPMENT);
    System.out.println("Callback URL : " + get("CALLBACK_URL"));
    System.out.println("MMAPI URL : " + Constants.REST_API_SANDBOX_ENDPOINT);
  }
}
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