$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search/SearchRepositories.feature");
formatter.feature({
  "line": 1,
  "name": "GitHub search engine of repositories",
  "description": "\nScenarios for executing commands against prod env of GitHub\nRepository search validations are done",
  "id": "github-search-engine-of-repositories",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "# Background will run before all scenarios"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "base URL is set",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchByNameStepsDefs.base_URL_is_set()"
});
formatter.result({
  "duration": 277209258,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Search Engine by Author Name",
  "description": "\nTest repository search functionality for specific user name",
  "id": "github-search-engine-of-repositories;test-search-engine-by-author-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the following query parameters are set",
  "rows": [
    {
      "cells": [
        "parameter",
        "qualifier",
        "value"
      ],
      "line": 17
    },
    {
      "cells": [
        "search",
        "user",
        "apache"
      ],
      "line": 18
    },
    {
      "cells": [
        "sort",
        "",
        "stars"
      ],
      "line": 19
    },
    {
      "cells": [
        "order",
        "",
        "desc"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "status code should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the reposponse should be the following",
  "rows": [
    {
      "cells": [
        "login",
        "id"
      ],
      "line": 23
    },
    {
      "cells": [
        "apache",
        "47359"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_following_query_parameters_are_set(RepositoryContainer\u003e)"
});
formatter.result({
  "duration": 2470278198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "SearchByNameStepsDefs.status_code_should_be(int)"
});
formatter.result({
  "duration": 1503745,
  "status": "passed"
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_reposponse_should_be_the_following(ResponseContainer\u003e)"
});
formatter.result({
  "duration": 1950474,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "# Background will run before all scenarios"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "base URL is set",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchByNameStepsDefs.base_URL_is_set()"
});
formatter.result({
  "duration": 36013,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search for repository by user name use pagination",
  "description": "\nPer page parameters returns given number of items per request",
  "id": "github-search-engine-of-repositories;search-for-repository-by-user-name-use-pagination",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "the following query parameters are set",
  "rows": [
    {
      "cells": [
        "parameter",
        "qualifier",
        "value"
      ],
      "line": 32
    },
    {
      "cells": [
        "search",
        "user",
        "apache"
      ],
      "line": 33
    },
    {
      "cells": [
        "page",
        "",
        "1"
      ],
      "line": 34
    },
    {
      "cells": [
        "per_page",
        "",
        "10"
      ],
      "line": 35
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "status code should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the reposponse should be the following",
  "rows": [
    {
      "cells": [
        "login",
        "id"
      ],
      "line": 38
    },
    {
      "cells": [
        "apache",
        "47359"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "items size is \u002710\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_following_query_parameters_are_set(RepositoryContainer\u003e)"
});
formatter.result({
  "duration": 501872293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "SearchByNameStepsDefs.status_code_should_be(int)"
});
formatter.result({
  "duration": 88987,
  "status": "passed"
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_reposponse_should_be_the_following(ResponseContainer\u003e)"
});
formatter.result({
  "duration": 692706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "SearchByNameStepsDefs.items_size_is(int)"
});
formatter.result({
  "duration": 111130,
  "status": "passed"
});
});