Feature: GitHub search engine of repositories 

	Scenarios for executing commands against prod env of GitHub
Repository search validations are done


	# Background will run before all scenarios
Background: 
	Given base URL is set 
	
	
Scenario: Test Search Engine by Author Name 
	
	Test repository search functionality for specific user name

	When the following query parameters are set 
		|parameter |qualifier|value   |
		|search    |user     |apache  |
		|sort      |         |stars   |
		|order     |         |desc    |
	Then status code should be '200' 
	And the reposponse should be the following 
		|login|  id    |
		|apache| 47359 |
		
		
Scenario: Search for repository by user name use pagination 

	Per page parameters returns given number of items per request

	When the following query parameters are set 
		|parameter |qualifier|value   |
		|search    |user     |apache  |
		|page      |         |1       |
		|per_page  |         | 10     |
	Then status code should be '200' 
	And the reposponse should be the following 
		|login|  id    |
		|apache| 47359 |
	And items size is '10' 
	
	
	