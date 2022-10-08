import express from "express"
import * as UserControl from "../controllers/userControll.js"

const router = express.Router();
router.post("/register", UserControl.AddUserAccount)
router.get("/users", UserControl.GetAllUser)
router.get("/users/:UserID", UserControl.GetUserById)
router.post('/login', UserControl.Login)

export default router;