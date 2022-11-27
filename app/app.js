//---------------------------> Import <-----------------------//
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Userroute from './routers/user.js'
import QuestionRoute from './routers/question.js'
import CommentRoute from './routers/comment.js'
import AnswerRoute from './routers/answer.js'
import FlagRoute from './routers/flag.js'
import PostLikeRoute from "./routers/postLike.js";
import TagRoute from './routers/tag.js'
import signup from './routers/signup.js'
import mongoconfig from './configs/MongodbConfig.js'
import * as ValidateRequest from './middlewares/ValidateRequest.js'
//---------------------------> Express <-----------------------//
const app = express();

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({extended : true, limit: "30mb"}));
app.use('/', cors());
//---------------------------> Authenticate<-------------------------//
app.all('/ver1/authenticate/*', ValidateRequest.Validate);

app.use(Userroute)
app.use(QuestionRoute)
app.use(CommentRoute)
app.use(AnswerRoute)
app.use(FlagRoute)
app.use(PostLikeRoute)
app.use(TagRoute)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATH, DELETE');
    next();
})

//-----------------------------> Mongoose <--------------------------//
mongoose.connect(mongoconfig.mongodb.THAI_uri);

//------------------------------> Post <-----------------------------//
app.use(signup);
//---------------------------> Set up PORT <-------------------------//
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3001;
}



//---------------------------> ListenPort <--------------------------//
app.listen(port, () => {
    console.log("Server is running on port 3001");
})