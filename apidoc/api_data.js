define({ "api": [
  {
    "type": "POST",
    "url": "/ver1/authenticate/question",
    "title": "Post a new question",
    "version": "1.0.0",
    "name": "AddQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to post a question to the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/question",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of the posted question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\"success\": true,\n    \"message\": \"Your question has been posted\",\n    \"question\": [\n        {\n            \"Title\": \"Web development\",\n            \"QContent\": \"I want to become a fullstack developer. Where to start?\",\n            \"_id\": \"636a183466f6a1bf9959148f\",\n            \"PostedDate\": \"2022-11-08T08:49:56.062Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>User need to log in into the system to post a question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"success\": false,\n    \"code\": 9,\n    \"message\": \"Invalid Token\",\n    \"description\": \"You need to log in to perform the request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/questions/:QuestionId",
    "title": "Delete a question",
    "version": "1.0.0",
    "name": "DeleteQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to delete a question</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the id of the deleted question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a question\",\n    \"data\": {\n        \"id\": \"636a1f99b271b3895b3d2853\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Either administrator or owner can delete this question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "/ver1/questions",
    "title": "Get all questions",
    "version": "1.0.0",
    "name": "GetAllQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>user use this api to get all questions in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/questions",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of all questions in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"List of all questions\",\n    \"questions\": [\n        {\n            \"_id\": \"6363c1ec3e42dd9f6b868f17\",\n            \"QContent\": \"How to learn Python??\",\n            \"PostedDate\": \"2022-11-03T13:28:12.684Z\",\n            \"UserID\": \"634fc9cecbc7f9f402d76e07\",\n            \"Title\": \"Python\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "/ver1/questions/:UserID",
    "title": "Get all questions of a user",
    "version": "1.0.0",
    "name": "GetQuestionByUserID",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to get all questions of other users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of all questions of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Questions of user 634fc9cecbc7f9f402d76e07\",\n    \"questions\": [\n        {\n            \"_id\": \"6363c1ec3e42dd9f6b868f17\",\n            \"QContent\": \"How to learn Python??\",\n            \"PostedDate\": \"2022-11-03T13:28:12.684Z\",\n            \"UserID\": \"634fc9cecbc7f9f402d76e07\",\n            \"Title\": \"Python\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "PUT",
    "url": "/ver1/authenticate/questions/:QuestionId",
    "title": "Update a question",
    "version": "1.0.0",
    "name": "UpdateQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to update a question</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the id of the updated question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Updated a question\",\n    \"data\": {\n        \"id\": \"6363c1ec3e42dd9f6b868f17\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Either administrator or owner can delete this question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"Only the owner can edit the question\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "POST",
    "url": "/ver1/user",
    "title": "Create a new user account",
    "version": "1.0.0",
    "name": "AddUserAccount",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to create a new account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>Name of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>a unique string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>unique email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>a string indicate password of the user's account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserRight",
            "description": "<p>a string indicate permission of a user in the system</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/user",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of created users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Created Successfully\",\n  \"data\": [\n      {\n          \"UserName\": \"Trong\",\n          \"LoginName\": \"Trong\",\n          \"Password\": \"$2a$10$prj7fTAILea2kUhptzGAf.jJe3.asOaRP62i0ATdZRQRVb0.rTzge\",\n          \"Email\": \"trong123@gmail.com\",\n          \"_id\": \"63424a31bfeed9be13fd9e65\"\n      }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409_Conflict",
            "description": "<p>Email Conflict</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n     \"success\": false,\n     \"code\": 7,\n     \"message\": \"Email conflict\",\n     \"description\": \"There is another account using this Email.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/user/:UserID",
    "title": "Delete a user by ID",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Delete one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the deleted user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Deleted a user\",\n     \"data\": {\n         \"id\": \"63691d8b63bf541dcbe339a5\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Bad Request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"code\": 8,\n     \"message\": \"invalid_id\",\n     \"description\": \"The inputted user id is in wrong format\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/ver1/authenticate/users",
    "title": "Get a list of all users",
    "version": "1.0.0",
    "name": "GetAllUser",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Get all users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"List of all users\",\n \"data\": [\n     {\n         \"_id\": \"633e90e356881a06993559f3\",\n         \"UserName\": \"Thanh Le\",\n         \"LoginName\": \"ThanhVe\",\n         \"Password\": \"$2b$10$hkrkTOixirx/4g/bEbgWru.gVfjOYdtq3yirQxDdxAGFEenKqriPC\",\n         \"Email\": \"ThanhVe@gmail.com\"\n     },\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>invalid token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\"\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/ver1/users/:UserID",
    "title": "Get a user by ID",
    "version": "1.0.0",
    "name": "GetUserById",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Get one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/users/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Found one user with id: 633eb8f0069528b78658b656\",\n     \"data\": {\n                 \"_id\": \"633eb8f0069528b78658b656\",\n                 \"UserName\": \"Trong\",\n                 \"LoginName\": \"Trong\",\n                 \"Password\": \"$2a$10$BqqeoYnYcZLGXrK89JHju.j9Ymy1mi3.GrrLpIM1CN6xIUORaMNuS\",\n                 \"Email\": \"trong@gmail.com\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Forbidden content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403_Forbidden\n {\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Not available\",\n     \"description\": \"This content is not available\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login to the system",
    "version": "1.0.0",
    "name": "Login",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to login into the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/login",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LoginName",
            "description": "<p>Login name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>User name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"token\": \"abc\",\n    \"id\": \"634fc9cecbc7f9f402d76e07\",\n    \"LoginName\": \"Thai\",\n    \"UserName\": \"Thai\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404_Not_Found",
            "description": "<p>User does not exist in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"success\": false,\n     \"code\": 8,\n     \"mess\": \"unavailable\",\n     \"description\": \"Cannot find your account\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "ver1/authenticate/user/:UserID",
    "title": "Update information of a user by ID",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Update one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the updated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Updated a user\",\n     \"data\": {\n         \"id\": \"63691d8b63bf541dcbe339a5\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Forbidden</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n {\n     \"success\": false,\n     \"code\": 8,\n     \"message\": \"invalid_user_right\",\n     \"description\": \"you don't have permission to perform this request\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  }
] });
