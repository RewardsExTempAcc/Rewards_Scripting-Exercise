package step_defs;

import static org.testng.Assert.assertEquals;

import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import domain.RepositoryContainer;
import domain.ResponseContainer;
import utils.APIRunner;
import utils.ConfigReader;

public class SearchByNameStepsDefs {
	private String baseUrl;
	@Given("^base URL is set$")
	public void base_URL_is_set() throws Throwable {
		baseUrl = ConfigReader.getProperty("baseURL");
	}

	@Given("^Content type and Accept type is JSON$")
	public void content_type_and_Accept_type_is_JSON() throws Throwable {
	  
	}


	@When("^the following query parameters are set$")
	public void the_following_query_parameters_are_set(List<RepositoryContainer> entry) {
		
		 APIRunner.runGetRequest(baseUrl, entry);
	}

	@Then("^status code should be '(\\d+)'$")
	public void status_code_should_be(int status) {
	    assertEquals(APIRunner.getStatusCode(), status);
	}

	@Then("^the reposponse should be the following$")
	public void the_reposponse_should_be_the_following(List<ResponseContainer> response) {
	   APIRunner.getResponse().getItems().stream().forEach(item -> {
		   assertEquals(item.getOwner().getLogin(), response.get(0).getLogin());
		   assertEquals(item.getOwner().getId(), response.get(0).getId());
	   }
	 
	   );
	}
	
	@Then("^items size is '(\\d+)'$")
	public void items_size_is(int size)  {
		assertEquals(APIRunner.getResponse().getItems().size(), size);
	}

}
