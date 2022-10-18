import express from "express"
import * as UserControl from "../controllers/userControll.js"

const router = express.Router();
/**
 * @api {POST} /register Create a new user account
 * @apiVersion 1.0.0
 * @apiName AddUserAccount
 * @apiGroup User
 *
 * @apiDescription User use this api to create a new account
 *
 * @apiParam {string} UserName Name of a user
 * @apiParam {string} loginName a unique string
 * @apiParam {string} email unique email
 * @apiParam {String} password a string
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/register
 *
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} users Information of created users
 * @apiSuccessExample Success-Response:
 *    {
 *      "message": "Created Successfully",
 *      "User": [
 *          {
 *              "UserName": "Trong",
 *              "LoginName": "Trong",
 *              "Password": "$2a$10$prj7fTAILea2kUhptzGAf.jJe3.asOaRP62i0ATdZRQRVb0.rTzge",
 *              "Email": "trong123@gmail.com",
 *              "_id": "63424a31bfeed9be13fd9e65"
 *          }
 *      ]
 *     }
 *
 * @apiError  409_Conflict Incorrect Email/Password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "Incorrect Email/Password"
 *     }
 */
router.post("/register", UserControl.AddUserAccount)

/**
 * @api {GET} /users Get a list of all users
 * @apiVersion 1.0.0
 * @apiName GetAllUser
 * @apiGroup User
 * @apiPermission administrator
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription Get all users
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} users the list of all users' data
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "success": true,
 *      "message": "List of all users",
 *      "users": [
 *          {
 *              "_id": "633e90e356881a06993559f3",
 *              "UserName": "Thanh Le",
 *              "LoginName": "ThanhVe",
 *              "Password": "$2b$10$hkrkTOixirx/4g/bEbgWru.gVfjOYdtq3yirQxDdxAGFEenKqriPC",
 *              "Email": "ThanhVe@gmail.com"
 *          },
 *       ]
 *      }
 *
 * @apiError 400_Bad_Request invalid input data
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "result": "fail",
 *       "message": "invalid input"
 *     }
 */
router.get("/users", UserControl.GetAllUser)

/**
 * @api {GET} /users/:UserID Get a user by ID
 * @apiVersion 1.0.0
 * @apiName GetUserById
 * @apiGroup User
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription Get one user
 *
 * @apiParam {string} UserID ID of a user, on params
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/users/633eb8f0069528b78658b656
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} users the list of all users' data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "message": "Found one user with id: 633eb8f0069528b78658b656",
 *          "users": {
 *                      "_id": "633eb8f0069528b78658b656",
 *                      "UserName": "Trong",
 *                      "LoginName": "Trong",
 *                      "Password": "$2a$10$BqqeoYnYcZLGXrK89JHju.j9Ymy1mi3.GrrLpIM1CN6xIUORaMNuS",
 *                      "Email": "trong@gmail.com"
 *          }
 *      }
 *
 * @apiError 500_Internal_Server_Error Not Found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *          "success": false,
 *          "message": "Not Found.",
 *          "error": "Cast to ObjectId failed for value \"633eb8f0069528b78658b65\" (type string) at path \"_id\" for model \"users\""
 *      }
 */
router.get("/users/:UserID", UserControl.GetUserById)


/**
 * @api {POST} /login Login
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup User
 * @apiPermission Every one
 *
 * @apiDescription login and get access token
 *
 * @apiParam {string} loginName a string
 * @apiParam {String} password a string
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/login
 *
 * @apiSuccess {String} token access token of a user
 * @apiSuccess {String} id ID of a user
 * @apiSuccess {String} LoginName login name of a user
 * @apiSuccess {String} UserName Name of a user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "token": "abc",
 *          "id": "633e90e356881a06993559f3",
 *          "LoginName": "ThanhVe",
 *          "UserName": "Thanh Le"
 *      }
 *
 * @apiError 404_Not_Found Can not find the login name in the databse
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *          "code": 8,
 *          "mess": "unavailable"
 *      }
 */
router.post('/login', UserControl.Login)

router.delete('/delete/user/:id', UserControl.DeleteUser)

router.put('/update/user/:id', UserControl.UpdateUser)

export default router;