import express from 'express'
import * as PostLikeControl from '../controllers/postLikeControl.js'



const router = express.Router();



router.post("/ver1/authenticate/post-like", PostLikeControl.AddPostLike)


/**
 * @api {GET} /ver1/post-like View all likes in the system
 * @apiVersion 1.0.0
 * @apiName GetAllPostLike
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post like in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes in the system
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "List of all likes",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *          }
 *
 *      ]
 * }
 *
 */
router.get("/ver1/post-like", PostLikeControl.GetAllPostLike)


/**
 * @api {GET} /ver1/post-like/user/:UserID View all post likes of a user
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByUserID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of another user
 *
 * @apiParam {string} UserID Id of a user
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/user/:UserID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes of user 637653c86faa44c3c5dd964a",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *      ]
 * }
 *
 */
router.get("/ver1/post-like/user/:UserID", PostLikeControl.GetPostLikeByUserID)


/**
 * @api {GET} /ver1/post-like/question/:QuestionID View all post likes of a question
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByQuestionID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of a question
 *
 * @apiParam {string} QuestionID Id of a question
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/question/:QuestionID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a question
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes on question 63785e884683c153e4e3453b",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *     ]
 * }
 *
 */
router.get("/ver1/post-like/question/:QuestionID", PostLikeControl.GetPostLikeByQuestionID)


/**
 * @api {GET} /ver1/post-like/answer/:AnswerID View all post likes of a question
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByAnswerID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of an answer
 *
 * @apiParam {string} AnswerID Id of a answer
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/answer/:AnswerID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of an answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes on question 63785e884683c153e4e3453b",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "AnswerID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *     ]
 * }
 *
 */
router.get("/ver1/post-like/answer/:AnswerID", PostLikeControl.GetPostLikeByAnswerID)


/**
 * @api {GET} /ver1/post-like/comment/:CommentID View all post likes of a comment
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByCommentID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of a comment
 *
 * @apiParam {string} AnswerID Id of a answer
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/comment/:CommentID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a comment
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags on comment 6387764f05d1aa0e48681629",
 *     "likes": [
 *         {
 *             "_id": "6388e0262852d2ab527db466",
 *             "CommentID": "6387764f05d1aa0e48681629",
 *             "PostLikeDate": "2022-12-01T17:11:02.638Z",
 *             "UserID": "6368bcb887e84601d546dcc4"
 *         }
 *     ]
 * }
 *
 */
router.get("/ver1/post-like/comment/:CommentID", PostLikeControl.GetPostLikeByCommentID)

// router.delete("/ver1/authenticate/post-like/:PostLikeId", PostLikeControl.DeletePostLike)


export default router;