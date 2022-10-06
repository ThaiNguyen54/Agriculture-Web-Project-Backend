import AddUserAccount from '../controllers/register.js';
import express from 'express'
const router = express.Router();


router.post('/register', AddUserAccount);

export default router;