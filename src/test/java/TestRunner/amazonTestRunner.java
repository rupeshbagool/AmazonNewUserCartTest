package TestRunner;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.*;


//				
@CucumberOptions(
		features="Features/Test.feature",
		glue={"StepDefinition"},
		plugin = {"pretty","html:target/cucumber"}
		)						
@Test
public class amazonTestRunner extends AbstractTestNGCucumberTests{
	 
}
