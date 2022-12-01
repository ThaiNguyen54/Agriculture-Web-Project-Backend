import express from 'express'
import * as AnswerControl from '../controllers/answerControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();

router.post("/ver1/authenticate/answer", AnswerControl.AddAnswer)
router.get("/ver1/answers", AnswerControl.GetAllAnswer)
router.get("/ver1/answers/:UserID", AnswerControl.GetAnswerByUserID)
// router.delete("/ver1/authenticate/answers/:AnswerId", AnswerControl.DeleteAnswer)
router.delete("/ver1/answers/:AnswerId", AnswerControl.DeleteAnswer)
router.put("/ver1/authenticate/answers/:AnswerId", AnswerControl.UpdateAnswer)
export default router;