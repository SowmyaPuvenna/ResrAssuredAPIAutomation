package stepdefinitions;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import apiutils.RequestResponseSpec;
import reusableclasses.Utils;

public class SocialNetworkingStepDef {
	static Logger log = Logger.getLogger("SocialNetworkingStepDef");
	String apiURL;

		@Given("^(post|comments|users) api URI$")
		public void apiURI(String string) throws Throwable {
			//getting the base URL and storing in uri string variable
			String uri = Utils.getValueFromProp("baseurl").toString();
			//End Point (post, comments, userlist) and storing in String variable
			String endPoint = Utils.getValueFromProp(string).toString();
			//Concatenating uri and end point into apiURL 
			apiURL = uri.concat(endPoint);
			log.info("API URL is : '" + apiURL + "'");
		}

		@When("^(post|comments|users) api is passed with \"([^\"]*)\"$")
		public void apiPassedParams(String resource, String params) throws Throwable {
			Map<String, String> paramList = new HashMap<>();
			paramList.put(params.split("=")[0].trim(), params.split("=")[1].trim());
			//passing uri and params to the hit the api and get the response
			RequestResponseSpec.runAPIRequest(apiURL, paramList);
			log.info("Sent Request for API");
		}

		//Verifying the status code "200" 
		@Then("^Verify (post|comments|users) api response code \"([^\"]*)\"$")
		public void verifyResponseCode(String resource, String code) throws Throwable {
			int resCode = RequestResponseSpec.getAPIStatusCode();
			log.info("The API returned : '" + resCode + "'");
			Assert.assertEquals(code, String.valueOf(resCode));
		}

		//Verifying the no. of responses received for given params
		@Then("^Verify (post|comments|users) api response \"([^\"]*)\"$")
		public void verifyResponse(String resource, String noOfResponses) throws Throwable {
			String actualCount = String.valueOf(RequestResponseSpec.getObjectsFromResponse().size());
			Assert.assertEquals(actualCount, noOfResponses);
			log.info("Response received as expected");
		}

		//Verifying the attributes for each api
		@Then("^Verify (post|comments|users) response has with attributes$")
		public void verifyResponseAttributes(String resource, DataTable attributes) throws Throwable {
			List<String> keyValues = attributes.transpose().asList(String.class);
			Map<String, ?> postObject = RequestResponseSpec.getObjectsFromResponse().get(0);
			boolean isPresent = true;
			for (String key : keyValues) {
				if (!postObject.containsKey(key)) {
					log.info("'" + key + "' is not found in '" + resource + "' ");
					isPresent = false;
					break;
				}
			}
			Assert.assertTrue(isPresent);
			log.info("Keys are present in response");
		}
	

}
