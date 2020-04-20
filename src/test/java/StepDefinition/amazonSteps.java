package StepDefinition;

import cucumber.api.java.en.*;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import static org.testng.Assert.assertEquals;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import base.BaseClass;



public class amazonSteps extends BaseClass {
	
		
@Given("^Open Google Chrome and navigate to https://www.amazon.de/$")				
	    public void open_the_Chrome_and_launch_the_amazonWebsite() throws Throwable							
	    {		
			/*
 			String chromedriverPath=  System.getProperty("user.dir")+"/src/test/resources/";
					if (System.getProperty("os.name").toLowerCase().contains("win"))
						chromedriverPath="chromedriver.exe";
			System.setProperty("webdriver.chrome.driver",chromedriverPath);
			driver = new ChromeDriver();
			*/

			
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/chromedriver.exe");
			driver = new ChromeDriver();
			
			driver.get("https://www.amazon.de");
			driver.manage().window().maximize();			
	    }

@When("^search the cheapest Snickers and Skittles on the page$")					
	    public void search_cheapest_Snickers_and_Skittles() throws Throwable 							
	    {		
	    	driver.findElement(By.xpath("//input[@id='twotabsearchtextbox']")).sendKeys("Snickers and Skittles");
	       	driver.findElement(By.xpath("//input[@type='submit' and @class='nav-input']")).click();
	       	wait = new WebDriverWait(driver, 10, 50);
	       	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//select[@name='s']")));
	       	Select sortBy=new Select(driver.findElement(By.xpath("//select[@name='s']")));
	        sortBy.selectByValue("price-asc-rank");
	    }
	    
@When("^Add the cheapest ones to your Basket$")
	    public void Add_Cheapest_one_to_your_basket() throws Throwable
	    {
//	       	wait = new WebDriverWait(driver, 15);
	       	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@id='ad-feedback-text-auto-sparkle-hsa-tetris']/following::a[@class='a-link-normal a-text-normal'][1]")));
	    	driver.findElement(By.xpath("//span[@id='ad-feedback-text-auto-sparkle-hsa-tetris']/following::a[@class='a-link-normal a-text-normal'][1]")).click();
	    	wait = new WebDriverWait(driver, 10, 50);
	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//i[@class='a-icon a-accordion-radio a-icon-radio-inactive']")));
	    	WebElement radiobtn = driver.findElement(By.xpath("//i[@class='a-icon a-accordion-radio a-icon-radio-inactive']"));
	    	WebElement addtocart = driver.findElement(By.xpath("//input[@id='add-to-cart-button']"));
	    	if(radiobtn.isEnabled()) 
	    	{
	    		radiobtn.click();
	    		wait = new WebDriverWait(driver, 10, 50);
	    		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='add-to-cart-button']")));
	    		addtocart.click();
	    	}
	    	else 
	    	{
	    		addtocart.click();	
	    	}
	    }
	    
	    
@When("^check if the basket calculates the result correctly$")
	    public void check_if_the_basket_calculaes_the_result_correctly() throws Throwable
	    {
	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@id='hlb-view-cart-announce']")));
	    	driver.findElement(By.xpath("//a[@id='hlb-view-cart-announce']")).click();
	    	String Itemprice1 = driver.findElement(By.xpath("//div[@data-item-count='1']//span[contains(@class,'sc-product-price')]")).getText();
	    	System.out.println(Itemprice1);
	    	String TotalPrice = driver.findElement(By.xpath("//span[@id='sc-subtotal-amount-activecart']//span")).getText();
	    	if (Itemprice1.equals(TotalPrice)) 
	    	{
	    		screenshotCartCalculation();
	    	}    	
	    }
	    	
@When("^click on checkout, without an account$")
	    public void click_on_checkout_without_an_account() throws Throwable
	    {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@name='proceedToRetailCheckout']")));
			driver.findElement(By.xpath("//input[@name='proceedToRetailCheckout']")).click();
	    }
	    
	    
@Then("^the user gets redirected to the registration page$")					
	    public void the_user_gets_redirected_to_the_registration_page() throws Throwable 							
	    {    		
	    	String RegistrationText = driver.findElement(By.xpath("//h1[contains(text(),'Anmelden')]")).getText();
	    	if (RegistrationText.equals("Anmelden"))
	    	{
	    		FinalValidation();
	    	}
	    	
	    }		

	
	    public void tearDown() 
	    {
		}
	

}
