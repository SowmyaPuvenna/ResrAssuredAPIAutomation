$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/socialNetworkingServices.feature");
formatter.feature({
  "line": 2,
  "name": "POST, GET APIs validation with paramenters passed and validate the response",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AllApiExecution"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FirstAPI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "post api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 16,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "id\u003d59",
        "200",
        "1"
      ],
      "line": 17,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "userId\u003d6",
        "200",
        "10"
      ],
      "line": 18,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FirstAPI"
    },
    {
      "line": 1,
      "name": "@AllApiExecution"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "post api is passed with \"id\u003d59\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 165513100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    },
    {
      "val": "id\u003d59",
      "offset": 25
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 1834466601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 1369200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 37496900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 963000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FirstAPI"
    },
    {
      "line": 1,
      "name": "@AllApiExecution"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "post api is passed with \"userId\u003d6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify post api response \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 10
    },
    {
      "cells": [
        "id"
      ],
      "line": 11
    },
    {
      "cells": [
        "title"
      ],
      "line": 12
    },
    {
      "cells": [
        "body"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 741800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    },
    {
      "val": "userId\u003d6",
      "offset": 25
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 452477000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 328800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 988400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 442600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SecondAPI"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "comments api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 33,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "email\u003dNikita@garfield.biz",
        "200",
        "1"
      ],
      "line": 34,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "postId\u003d3",
        "200",
        "5"
      ],
      "line": 35,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SecondAPI"
    },
    {
      "line": 1,
      "name": "@AllApiExecution"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "comments api is passed with \"email\u003dNikita@garfield.biz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 675899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    },
    {
      "val": "email\u003dNikita@garfield.biz",
      "offset": 29
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 402738099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 379300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 807100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 376599,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SecondAPI"
    },
    {
      "line": 1,
      "name": "@AllApiExecution"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "comments api is passed with \"postId\u003d3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Verify comments api response \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 26
    },
    {
      "cells": [
        "id"
      ],
      "line": 27
    },
    {
      "cells": [
        "name"
      ],
      "line": 28
    },
    {
      "cells": [
        "email"
      ],
      "line": 29
    },
    {
      "cells": [
        "body"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 961600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    },
    {
      "val": "postId\u003d3",
      "offset": 29
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 444032899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 592200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 1067399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 646100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@ThirdAPI"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "users api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 52,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "website\u003danastasia.net",
        "200",
        "1"
      ],
      "line": 53,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "id\u003d9",
        "200",
        "1"
      ],
      "line": 54,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllApiExecution"
    },
    {
      "line": 36,
      "name": "@ThirdAPI"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "users api is passed with \"website\u003danastasia.net\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 652999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    },
    {
      "val": "website\u003danastasia.net",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 422679700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 1392100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 2198900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 976799,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AllApiExecution"
    },
    {
      "line": 36,
      "name": "@ThirdAPI"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "users api is passed with \"id\u003d9\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify users api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 43
    },
    {
      "cells": [
        "name"
      ],
      "line": 44
    },
    {
      "cells": [
        "phone"
      ],
      "line": 45
    },
    {
      "cells": [
        "email"
      ],
      "line": 46
    },
    {
      "cells": [
        "website"
      ],
      "line": 47
    },
    {
      "cells": [
        "company"
      ],
      "line": 48
    },
    {
      "cells": [
        "address"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 2206500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    },
    {
      "val": "id\u003d9",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.apiPassedParams(String,String)"
});
formatter.result({
  "duration": 432644899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseCode(String,String)"
});
formatter.result({
  "duration": 276501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponse(String,String)"
});
formatter.result({
  "duration": 515700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verifyResponseAttributes(String,DataTable)"
});
formatter.result({
  "duration": 393601,
  "status": "passed"
});
});