import users from "../models/user.js"
import bcrypt from 'bcryptjs';
import * as UserManagement from '../Management/UserManagement.js';
import JsonWebToken from 'jsonwebtoken';
import * as Rest from '../utils/Rest.js';
import MongoConfig from '../configs/MongodbConfig.js'

export const AddUserAccount = async(req, res) =>{

    try{
        // Hash Password
        const hashedPassowrd = await bcrypt.hash(req.body.Password, 10);

        const newUser = new users(req.body);
        newUser.Password = hashedPassowrd;
        const CheckUserData = await users.findOne({Email: req.body.Email});
        if(CheckUserData){
            res.status(409).send({message: "Incorrect Email/Password"});
        }
        else{
            const UserInsertData = await users.insertMany(newUser);
            if(!UserInsertData){
                throw new Error("Can not upload");
            }else{
                // res.send(UserInsertData);
                res.json({
                    message: "Created Successfully",
                    User: UserInsertData,
                })
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

export function GetAllUser(req, res){
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    console.log(req.query)
    if(accessUserRight != 'ADMIN') {
        return res.json({
            'Error Code': 8,
            'Error Description': 'Invalid User Right'
        })
    }
    users.find()
        .then(allUsers => {
            return res.status(200).json({
                success: true,
                message: 'List of all users',
                users: allUsers,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Can not get users. Please try again.',
                error: err.message
            });
        });




}

export function GetUserById(req, res){
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    const id = req.params.UserID;
    if (accessUserRight != id) {
        return res.json({
            "Error Code": 9,
            "Error Description": "This content is not available"
        })
    }
    users.findById(id)
        .then((user) => {
            res.status(200).json({
                success: true,
                message: `Found one user with id: ${id}`,
                users: user,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Not Found.',
                error: err.message,
            });
        });
}

export function Login (req, res) {
    let LoginName = req.body.LoginName || '';
    let Password = req.body.Password || '';
    UserManagement.Authenticate(LoginName, Password, function (ErrorCode, ErrorMess, httpCode, ErrorDescript, user) {
        if (ErrorCode) {
            return Rest.SendError(res, ErrorCode, ErrorMess, httpCode, ErrorDescript);
        }

        JsonWebToken.sign({id: user._id, LoginName: user.LoginName, Email: user.Email, UserRight: user.UserRight}, MongoConfig.authenticationkey, {expiresIn: '10 days'}, function(error, token) {
            if(error) {
                return Rest.SendError(res, 1, 'Creating Token Failed', 400, error);
            }
            else{
                return Rest.SendSuccessToken(res, token, user);
            }
        });
    });
}

export function DeleteUser (req, res) {
    let UserID = req.params.id || '';
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    if(accessUserRight != 'ADMIN') {
        return res.json({
            'Error Code': 8,
            'Error Description': 'Invalid User Right'
        })
    }
    UserManagement.Delete(UserID, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let ResultData = {};
        ResultData.id = UserID;
        return Rest.SendSuccess(res, ResultData, httpCode);
    });
}

export function UpdateUser (req, res){
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    if(accessUserRight != 'ADMIN') {
        return res.json({
            'Error Code': 8,
            'Error Description': 'Invalid User Right'
        })
    }
    // let AccessUserID = req.body.accessUserID || '';
    let id = req.params.id || '';

    // let AccessLoginName = req.body.accessLoginName || '';
    let data = req.body || '';
    UserManagement.Update(id, data, function(errorCode, errorMessage, httpCode, errorDescription, result){
        if(errorCode){
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let outResultData = {};
        outResultData.id = result._id;
        return Rest.SendSuccess(res, outResultData, httpCode);
    });

}


