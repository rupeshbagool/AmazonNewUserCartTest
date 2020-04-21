# AmazonNewUserCartTest

**Before Test - Set up**
1. Browser can be passed as parameter for running on desired browser (Chrome).


**After Test - Tear down**
1. All the existing sessions are closed.
  
**Miscellaneous Feature**
1. **Screenshot** is taken and saved for validation of conditions. (\BDDcucumberTest_1\Screenshot)
2. **Test Report** for the test execution is available in the test-output directory.

**Test Feature**
Feature: New use Redirected to registration page after checkout without an account 
Scenario: Use Redirected to registration page 
Given Open Google Chrome and navigate to https://www.amazon.de/			
When search the cheapest Snickers and Skittles on the page
	And Add the cheapest ones to your Basket
	And check if the basket calculates the result correctly
	And click on checkout, without an account
Then the user gets redirected to the registration page


**Updates Required**
1. Automatic ditection of OS and initiate drivers accordingly.
2. Logging mechanism and optimize code.
3. Exception Handling for few cases.

