Feature: Test One 



Background: 
	Given base URL is set 
	And Content type and Accept type is JSON 
	
Scenario: Test Search Engine by Author Name 
	When user sends GET request to search repository by 'ownerLoginName' 
	And  the following query parameters are set
		|searhText|sort|order|
		|Selenium|starts|desc|
	Then status code should be '200'
	And the reposponse should be the following
	
		
		
	