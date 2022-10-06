//---------------------------> Import <-----------------------//
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import signup from './routers/signup.js'
import register from './routers/register.js'
//---------------------------> Express <-----------------------//
const app = express();

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({extended : true, limit: "30mb"}));
app.use('/', cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATH, DELETE');
    next();
})

//-----------------------------> Mongoose <--------------------------//
mongoose.connect("mongodb+srv://leductin:tin123@cluster0.vyulz25.mongodb.net/UserDB", {useNewUrlParser: true});

//------------------------------> Post <-----------------------------//
app.use(signup);
app.use(register);
//---------------------------> Set up PORT <-------------------------//
let port = process.env.PORT;
if(port == null || port == ""){
  port = 3001;
}

//---------------------------> ListenPort <--------------------------//
app.listen(port, () => {
    console.log("Server is running on port 3001");
})