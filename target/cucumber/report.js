$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Test.feature");
formatter.feature({
  "line": 1,
  "name": "New use Redirected to registration page after checkout without an account",
  "description": "",
  "id": "new-use-redirected-to-registration-page-after-checkout-without-an-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Use Redirected to registration page",
  "description": "",
  "id": "new-use-redirected-to-registration-page-after-checkout-without-an-account;use-redirected-to-registration-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Google Chrome and navigate to https://www.amazon.de/",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "search the cheapest Snickers and Skittles on the page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add the cheapest ones to your Basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the basket calculates the result correctly",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on checkout, without an account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user gets redirected to the registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "amazonSteps.open_the_Chrome_and_launch_the_amazonWebsite()"
});
formatter.result({
  "duration": 9593447900,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.search_cheapest_Snickers_and_Skittles()"
});
formatter.result({
  "duration": 4358291500,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.Add_Cheapest_one_to_your_basket()"
});
formatter.result({
  "duration": 7958093000,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.check_if_the_basket_calculaes_the_result_correctly()"
});
formatter.result({
  "duration": 2851563400,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.click_on_checkout_without_an_account()"
});
formatter.result({
  "duration": 641248600,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.the_user_gets_redirected_to_the_registration_page()"
});
formatter.result({
  "duration": 31447500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Anmelden\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.113)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027RUPESHLAPPY\u0027, ip: \u0027192.168.110.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.113, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\Rupesh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59830}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b23cbfb41018342e4aca6c795b8b6756\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Anmelden\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.amazonSteps.the_user_gets_redirected_to_the_registration_page(amazonSteps.java:104)\r\n\tat ✽.Then the user gets redirected to the registration page(Features/Test.feature:14)\r\n",
  "status": "failed"
});
});