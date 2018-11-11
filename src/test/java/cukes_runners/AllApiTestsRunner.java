package cukes_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

	
	@CucumberOptions(
			
			plugin = {
			"html:target/default-cucumber-reports", 
			"json:target/cucumber.json"},
			glue = {"step_defs"},
			features = {"./src/test/resources/features"},
			dryRun = false
		)

	public class AllApiTestsRunner extends AbstractTestNGCucumberTests{
	
		
}
