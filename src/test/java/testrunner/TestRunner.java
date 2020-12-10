package testrunner;
import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

/*Inside tags, we can user 
@apiservtests - To execute all the Test Cases
@firsttest - To execute First One
@secondtest - To execute Second One
@thirdtest - To execute Third One*/


@CucumberOptions(
		plugin = { "html:target/HTML_Reports/", "json:target/cucumber.json"}, 
		features = ".", glue = {"stepdefinitions" },
		tags= {"@apiservtests"}
		)

public class TestRunner {
	static Logger log = Logger.getLogger("TestRunner");

	@BeforeClass
	public static void startTest() {
		log.info("------------Start of Test------------------------------------------");	
	}

	@AfterClass
	public static void endTest() {
		log.info("-------------End of Test---------------------------------------------");
	}
}
