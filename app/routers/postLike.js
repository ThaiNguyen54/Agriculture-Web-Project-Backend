import express from 'express'
import * as PostLikeControl from '../controllers/postLikeControl.js'



const router = express.Router();


/**
 * @api {POST} /ver1/authenticate/post-like Like a post (comment, question, answer)
 * @apiVersion 1.0.0
 * @apiName AddPostLike
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to like a comment, a question or an answer
 *
 * @apiParam {string} CommentID Id of the comment that is being flagged
 * @apiParam {string} AnswerID Id of the answer that is being flagged
 * @apiParam {string} QuestionID Id of the question that is being flagged
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/post-like
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flag Information of the flag
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Flag successfully",
 *     "flag": [
 *         {
 *             "CommentID": "636e57cd711b869f157330b2",
 *             "FlagName": "asdfxcvzxcvzxcv",
 *             "_id": "6388db952852d2ab527db441",
 *             "FlagDate": "2022-12-01T16:51:33.128Z",
 *             "UserID": "6368bcb887e84601d546dcc4"
 *         }
 *     ]
 * }
 *
 * @apiError  400_Bad_Request Authenticate failed
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "success": false,
 *          "code": 9,
 *          "message": "Invalid Token",
 *          "description": "You need to log in to perform the request"
 *      }
 */
router.post("/ver1/authenticate/post-like", PostLikeControl.AddPostLike)
router.get("/ver1/post-like", PostLikeControl.GetAllPostLike)
router.get("/ver1/post-like/user/:UserID", PostLikeControl.GetPostLikeByUserID)
router.get("/ver1/post-like/question/:QuestionID", PostLikeControl.GetPostLikeByQuestionID)
router.get("/ver1/post-like/answer/:AnswerID", PostLikeControl.GetPostLikeByAnswerID)
router.get("/ver1/post-like/comment/:CommentID", PostLikeControl.GetPostLikeByCommentID)
router.delete("/ver1/authenticate/post-like/:PostLikeId", PostLikeControl.DeletePostLike)


export default router;