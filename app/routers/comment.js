import express from 'express'
import * as CommentControl from '../controllers/commentControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();

router.post("/ver1/authenticate/comment", CommentControl.AddComment)
router.get("/ver1/comments", CommentControl.GetAllComment)
router.get("/ver1/comments/:UserID", CommentControl.GetCommentByUserID)
router.delete("/ver1/authenticate/comments/:CommentId", CommentControl.DeleteComment)
router.put("/ver1/authenticate/comments/:CommentId", CommentControl.UpdateComment)

export default router;