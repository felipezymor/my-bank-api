export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
      "description": "This is My Bank API Documentation. You can find out more about My Bank API at [https://github.com/felipezymor/my-bank-api](Github). For this sample, you can configure cors finding the commented tags `//cors` in the code.",
      "version": "1.0.0",
      "title": "My Bank API",
      "contact": {
        "email": "lfhfgs@gmail.com"
      }
    },
    "host": "localhost:3000",
    "basePath": "/v2",
    "tags": [
      {
        "name": "Account",
        "description": "Account Management",
        "externalDocs": {
          "description": "Find out more",
          "url": "https://github.com/felipezymor/my-bank-api"
        }
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    "paths": {
      "/account": {
        "get": {
          "tags": [
            "Account"
          ],
          "summary": "Get existing accounts",
          "description": "Get existing accounts",
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Account"
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        },
        "post": {
          "tags": [
            "Account"
          ],
          "summary": "New account",
          "description": "Create a new account by method post",
          "operationId": "updatePet",
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Create a new account with the received parameters",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Account"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Account created"
            },
            "400": {
              "description": "Error occurred"
            }
          }
        }
      }
    },
    "definitions": {
      "Account": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Luiz Felipe"
          },
          "balance": {
            "type": "integer",
            "example": 3500
          }
        },
        "xml": {
          "name": "Order"
        }
      }
    },
    "externalDocs": {
      "description": "Find out more about My Bank API",
      "url": "https://github.com/felipezymor/my-bank-api"
    }
  };