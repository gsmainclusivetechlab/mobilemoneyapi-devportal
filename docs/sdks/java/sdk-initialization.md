---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-java-sdk" target="_blank">mmapi-java-sdk</a>

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

3. The values that must be present inside the <span class="highlight">(config.properties)(<http://config.properties>)</span> files created
above file comes from your mmapi developer account. The final content of the files should look like:

```shell
CONSUMER_KEY=7g47724jk9hpi5o1jja3m3rouc
CONSUMER_SECRET=g5i176kcqjgnv17rf7sg9931v4b0eed7kjn1oi0a7dm5mkgfu6l
API_KEY=cxxZeeGh0P5xHDRSJzlbm2JIRPsbq9jC9k7Bh239
CALLBACK_URL=http://your-url.com
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