package testrunner;
import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

/*Inside tags, we can user 
@AllApiExecution - To execute all the Test Cases
@FirstAPI - To execute First One
@SecondAPI - To execute Second One
@ThirdAPI - To execute Third One*/


@CucumberOptions(
		plugin = { "html:target/HTML_Reports/", "json:target/cucumber.json"}, 
		features = ".", glue = {"stepdefinitions" },
		tags= {"@AllApiExecution"}
		)

public class TestRunner {
	static Logger log = Logger.getLogger("TestRunner");

	@BeforeClass
	public static void startTest() {
		log.info("------------Start for Test------------------------------------------");	
	}

	@AfterClass
	public static void endTest() {
		log.info("-------------End of Test---------------------------------------------");
	}
}
