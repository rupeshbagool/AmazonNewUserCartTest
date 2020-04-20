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
  "duration": 9919370001,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.search_cheapest_Snickers_and_Skittles()"
});
formatter.result({
  "duration": 2097043200,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.Add_Cheapest_one_to_your_basket()"
});
formatter.result({
  "duration": 10561737300,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.check_if_the_basket_calculaes_the_result_correctly()"
});
formatter.result({
  "duration": 2807630800,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.click_on_checkout_without_an_account()"
});
formatter.result({
  "duration": 5871097500,
  "status": "passed"
});
formatter.match({
  "location": "amazonSteps.the_user_gets_redirected_to_the_registration_page()"
});
formatter.result({
  "duration": 397764400,
  "status": "passed"
});
});