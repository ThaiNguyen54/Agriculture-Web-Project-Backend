import express from 'express'
import * as FlagControl from '../controllers/flagControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();

router.post("/ver1/authenticate/flag", FlagControl.AddFlag)
router.get("/ver1/flags", FlagControl.GetAllFlag)
router.get("/ver1/flags/user/:UserID", FlagControl.GetFlagByUserID)
router.get("/ver1/flags/question/:QuestionID", FlagControl.GetFlagByQuestionID)
router.get("/ver1/flags/answer/:AnswerID", FlagControl.GetFlagByAnswerID)
router.get("/ver1/flags/comment/:CommentID", FlagControl.GetFlagByCommentID)
router.delete("/ver1/authenticate/flags/:FlagID", FlagControl.DeleteFlag)




export default router;