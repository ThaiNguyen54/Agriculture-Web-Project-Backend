import express from 'express'
import * as PostLikeControl from '../controllers/postLikeControl.js'



const router = express.Router();

router.post("/ver1/authenticate/post-like", PostLikeControl.AddPostLike)
router.get("/ver1/post-like", PostLikeControl.GetAllPostLike)
router.get("/ver1/post-like/user/:UserID", PostLikeControl.GetPostLikeByUserID)
router.get("/ver1/post-like/question/:QuestionID", PostLikeControl.GetPostLikeByQuestionID)
router.get("/ver1/post-like/answer/:AnswerID", PostLikeControl.GetPostLikeByAnswerID)
router.get("/ver1/post-like/comment/:CommentID", PostLikeControl.GetPostLikeByCommentID)
router.delete("/ver1/authenticate/post-like/:PostLikeId", PostLikeControl.DeletePostLike)


export default router;