import express from 'express'
import * as QuestionControl from '../controllers/questionControl.js'

const router = express.Router();

router.post("/ver1/authenticate/question", QuestionControl.AddQuestion)
export default router;