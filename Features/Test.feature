Feature: New use Redirected to registration page after checkout without an account 

Scenario: Use Redirected to registration page 


Given Open Google Chrome and navigate to https://www.amazon.de/			


When search the cheapest Snickers and Skittles on the page
	And Add the cheapest ones to your Basket
	And check if the basket calculates the result correctly
	And click on checkout, without an account

Then the user gets redirected to the registration page
