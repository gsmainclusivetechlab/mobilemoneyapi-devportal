---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-android-sdk" target="_blank">mmapi-android-sdk</a>

```cmd
git clone git@github.com:gsmainclusivetechlab/mmapi-android-sdk.git -b develop
export MMAPI_ANDROID_SDK=$(pwd)/mmapi-android-sdk
```

Edit the file strings.xml inside the directory $MMAPI_ANDROID_SDK/GSMATest/src/main/res/values and insert the
values for <consumer_key> , <consumer_secret> , <api_key> taken from your mmapi developer account and
also the value for <callback_url> according to your environment. For setup a callback environment with
Postman, see this tutorial. (need to write the tutorial)

```xmlns
<resources xmlns:tools="http://schemas.android.com/tools">
  <string name="app_name">GSMA Sample Application</string>
  <string name="consumer_key"><consumer_key></string>
  <string name="consumer_secret"><consumer_secret></string>
  <string name="callback_url" tools:ignore="TypographyDashes"><callback_url>string>
  <string name="api_key"><api_key></string>
</resources>
```

Sample Code for Initialise the Android SDK

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