---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-android-sdk" target="_blank">mmapi-android-sdk</a>:

```shell
git clone git@github.com:gsmainclusivetechlab/mmapi-android-sdk.git -b develop
export MMAPI_ANDROID_SDK=$(pwd)/mmapi-android-sdk
```

2. Edit the file <span class="highlight">strings.xml</span> inside the directory <span class="highlight">$MMAPI_ANDROID_SDK/GSMATest/src/main/res/values</span> and insert the
values for <span class="highlight"><consumer_key></span> , <span class="highlight"><consumer_secret></span> , <span class="highlight"><api_key></span> taken from your mmapi developer account and
also the value for  <span class="highlight"><callback_url></span> according to your environment. For setup a callback environment with
Postman, see this tutorial. <span style="color: red;">(need to write the tutorial)</span>

```xml
<resources xmlns:tools="http://schemas.android.com/tools">
  <string name="app_name">GSMA Sample Application</string>
  <string name="consumer_key"><consumer_key></string>
  <string name="consumer_secret"><consumer_secret></string>
  <string name="callback_url" tools:ignore="TypographyDashes"><callback_url>string>
  <string name="api_key"><api_key></string>
</resources>
```

3. Sample Code for Initialise the Android SDK

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