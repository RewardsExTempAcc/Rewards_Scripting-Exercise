package rewards_retwork.cukes_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

	
	@CucumberOptions(
			
			plugin = {
			"html:target/default-cucumber-reports", 
			"json:target/cucumber.json"},
			
//			tags = "@temp",
			glue = {"step_defs"},
			features = {"./src/test/resources/features"},
			dryRun = true
		)

	public class AllApiTestsRunner extends AbstractTestNGCucumberTests{
	
}
