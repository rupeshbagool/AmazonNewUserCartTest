# AmazonNewUserCartTest

**Note : This code is running on Windows Machine.

**Before Test - Set up**
1. Browser can be passed as parameter for running on desired browser (Chrome).
  
**Miscellaneous Feature**
1. **Screenshot** is taken and saved for validation of conditions. (\BDDcucumberTest_1\Screenshot)
2. **Test Report** for the test execution is available in the test-output directory.

**Test Feature**
**Feature**: New use Redirected to registration page after checkout without an account 
**Scenario**: New user Redirected to registration page after selecting item to cart.
**Given** Open Google Chrome and navigate to https://www.amazon.de/			
**When** search the cheapest Snickers and Skittles on the page
	**And** Add the cheapest ones to your Basket
	**And** check if the basket calculates the result correctly
	**And** click on checkout, without an account
**Then** the user gets redirected to the registration page

Requesting reviewer to review the program and suggest possible optimizations and changes.


Thanks,
Rupesh


-------------*****************************************--------------
04/09/2020
Task:
1) Access Google Chrome.
2) Navigate to www.amazon.in website.
3) Search for "Sport Shoes"
