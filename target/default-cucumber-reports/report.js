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
  "duration": 157138399,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Search Engine by Author Name",
  "description": "\nTest repository search functionality for specific user name",
  "id": "github-search-engine-of-repositories;test-search-engine-by-author-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the following query parameters are set",
  "rows": [
    {
      "cells": [
        "parameter",
        "qualifier",
        "value"
      ],
      "line": 16
    },
    {
      "cells": [
        "search",
        "user",
        "apache"
      ],
      "line": 17
    },
    {
      "cells": [
        "sort",
        "",
        "stars"
      ],
      "line": 18
    },
    {
      "cells": [
        "order",
        "",
        "desc"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "status code should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the reposponse should be the following",
  "rows": [
    {
      "cells": [
        "login",
        "id"
      ],
      "line": 22
    },
    {
      "cells": [
        "apache",
        "47359"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_following_query_parameters_are_set(RepositoryContainer\u003e)"
});
formatter.result({
  "duration": 2752454924,
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
  "duration": 2092469,
  "status": "passed"
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_reposponse_should_be_the_following(ResponseContainer\u003e)"
});
formatter.result({
  "duration": 2075929,
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
  "duration": 36562,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "github-search-engine-of-repositories;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "the following query parameters are set",
  "rows": [
    {
      "cells": [
        "parameter",
        "qualifier",
        "value"
      ],
      "line": 28
    },
    {
      "cells": [
        "search",
        "user",
        "apache"
      ],
      "line": 29
    },
    {
      "cells": [
        "page",
        "",
        "1"
      ],
      "line": 30
    },
    {
      "cells": [
        "per_page",
        "",
        "10"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "status code should be \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the reposponse should be the following",
  "rows": [
    {
      "cells": [
        "login",
        "id"
      ],
      "line": 34
    },
    {
      "cells": [
        "apache",
        "47359"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "items size is \u002710\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_following_query_parameters_are_set(RepositoryContainer\u003e)"
});
formatter.result({
  "duration": 759948418,
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
  "duration": 116098,
  "status": "passed"
});
formatter.match({
  "location": "SearchByNameStepsDefs.the_reposponse_should_be_the_following(ResponseContainer\u003e)"
});
formatter.result({
  "duration": 490230,
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
  "duration": 102340,
  "status": "passed"
});
});