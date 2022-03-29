---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## SDK Initialisation

1. Clone the develop branch of the repository <a href="https://github.com/gsmainclusivetechlab/mmapi-javascript-sdk" target="_blank">mmapi-javascript-sdk</a>

```shell
git clone git@github.com:gsmainclusivetechlab/mmapi-javascript-sdk.git -b develop
export MMAPI_JAVASCRIPT_SDK=$(pwd)/mmapi-javascript-sdk
cd $MMAPI_JAVASCRIPT_SDK
```

2. Create the file <span class="highlight">.env</span> with all the environment variables needed to run the SDK. The values used in this
file comes from your mmapi developer account. The content of the file should look like:

```shell
GSMA_BASE_URL=https://sandbox.mobilemoneyapi.io/simulator/v1.2/passthrough/mm/
GSMA_BASE_URL_AUTH=https://sandbox.mobilemoneyapi.io/2/oauth/simulator/v1.2/mm/
GSMA_TOKEN_URL=https://sandbox.mobilemoneyapi.io/v1/oauth/accesstoken/
```

3. Build the SDK

After the build, the final javascript SDK file <span class="highlight">mmsdk.min.js</span> will be in the folder <span class="highlight">dist</span>.

```shell
npm install
npm run build
```

4. Sample code to initialise JavaScript SDK:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GSMA</title>
  </head>
  <body>
    <h1 class="main"></h1>
    <script src="mmsdk.min.js"></script>
    <script>
      // Init with Standard Auth
      gsma.initStandardAuth({
        username: '<consumer key>',
        pass: '<consumer secret>',
        apiKey: '<api key>',
        callbackUrl: '<callback url>',
        onFailure: (error) => {
          console.log('init failed stdAuth', error);
        },
        onSuccess: (success) => {
          console.log('init success stdAuth', success);
        },
      });
    </script>
    <script>
      console.log(window.gsma.auth);
    </script>
  </body>
</html>
```

<a href="https://www.notion.so/Code-Snippets-Integration-b5a4cba3838e4ed881befd900694b6f2" target="_blank">Code Snippets Integration</a>