import express from 'express'
import * as TagControl from '../controllers/tagControl.js'


const router = express.Router();

router.post("/ver1/authenticate/tag", TagControl.AddTag)
router.get("/ver1/tags", TagControl.GetAllTag)
router.get("/ver1/tags/user/:UserID", TagControl.GetTagByUserID)
router.get("/ver1/tags/question/:QuestionID", TagControl.GetTagByQuestionID)
router.get("/ver1/tags/answer/:AnswerID", TagControl.GetTagByAnswerID)
router.get("/ver1/tags/comment/:CommentID", TagControl.GetTagByCommentID)
router.delete("/ver1/authenticate/tags/:TagID", TagControl.DeleteTag)




export default router;