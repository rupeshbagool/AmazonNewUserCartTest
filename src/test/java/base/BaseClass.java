package base;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.ITestContext;
import org.testng.annotations.AfterTest;

/**
 * @Author: Rupesh Bagool
 * @Desc: Base class provides all the members & functions to be made visible for test classes and page objects
 */

public class BaseClass {

	public WebDriver driver;
	public WebDriverWait wait;

	public void DriverInitialize()
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/chromedriver.exe");
		driver =new ChromeDriver();
	}
	
	public WebElement waitForVisibilityOf(WebElement element) {
		int retryCount = 2;
		try{
			wait.until(ExpectedConditions.visibilityOf(element));
		}catch (TimeoutException ex){
			while(retryCount>0){
				wait.until(ExpectedConditions.visibilityOf(element));
				retryCount--;
			}
		}
		return element;
	}
    public Boolean waitForTextToBePresentInElement(WebElement element, String text) 
    {
        return wait.until(ExpectedConditions.textToBePresentInElement(element, text));
    }
    
    public void screenshotCartCalculation() throws IOException
    {
    	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    	FileUtils.copyFile(scrFile, new File(("user.dir")+"\\BDDcucumberTest\\Screenshot\\CalcScreenshot.png"));

    }
    
    public void FinalValidation() throws IOException
    {
    	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
    	FileUtils.getFile(scrFile, new File(("user.dir"))+"\\BDDcucumberTest\\Screenshot\\FinalValidation.png");

    }
    
    
	@AfterTest(alwaysRun = true)
	public void tearDown() {
		driver.quit();

	}
}