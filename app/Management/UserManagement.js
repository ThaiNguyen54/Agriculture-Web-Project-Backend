// import Validator from 'validator'
import * as Utils from '../utils/utilFuncs.js'
import User from '../models/user.js'
import bcrypt  from "bcryptjs";
import Validator from 'validator';
import {Login} from "../controllers/userControll.js";


export function Authenticate (LoginName, Password, callback) {
    try {
        if(!Utils.VariableTypeChecker(LoginName, 'string')){
            return callback(8, "invalid login name", 422, "Your login name is not a string", null);
        }

        if(!Utils.VariableTypeChecker(Password, 'string')){
            return callback(8, 'invalid password', 422, 'Your password is not a string', null);
        }

        User.findOne( {LoginName: LoginName}, function (error, user) {
            if (error) {
                return callback(8, 'Not found', 420, error, null);
            }

            if(user) {
                bcrypt.compare(Password, user.Password, function (error, result) {
                    if (result === true) {
                        return callback(null, null, 200, null, user);
                    }
                    else {
                        return callback(8, 'Wrong Password', 422, null, null);
                    }
                });
            }
            else
            {
                return callback(8, 'unavailable', 404, null, null);
            }
        });
    }
    catch (error) {
        return callback(8, 'authenticate failed', 400, error, null);
    }

}

export function Delete(UserID, callback) {
    try{
        if(!Utils.VariableTypeChecker(UserID, 'string') || !Validator.isMongoId(UserID)) {
            return callback(8, 'invalid_id', 400, 'user id is not a string');
        }

        let query = {_id: UserID};
        User.findOne(query, function(error, user) {
            if(error) {
                return callback(8, 'Cannot find the user', 420, error);
            }
            else {
                if(user) {
                    user.remove(function(error) {
                        if(error) {
                            return callback(8, 'Remove failed', 420, error);
                        }
                        return callback(null, null, 200, null);
                    });
                } else {
                    return callback(null, null, 200, null);
                }
            }
        });
    } catch (error) {
        return callback(8, 'Delete failed', 400, error);
    }
}

export function Update(UserID, UpdateData, callback) {
    try{
        if(!Utils.VariableTypeChecker(UserID, 'string') || !Validator.isMongoId(UserID)) {
            return callback(8, 'invalid id', 400, 'User id is not a string', null);
        }

        let query = {};
        query._id = UserID;
        let update ={};
        // update.updater = AccessUserID;

        if(Utils.VariableTypeChecker(UpdateData.LoginName, 'string') &&
            Validator.isAlphhanumeric(UpdateData.LoginName)) {
            update.LoginName = UpdateData.LoginName;
        }

        if(Utils.VariableTypeChecker(UpdateData.UserName, 'string')) {
            update.UserName = UpdateData.UserName;
        }

        if(Utils.VariableTypeChecker(UpdateData.Email, 'string')) {
            update.Email = UpdateData.Email
        }

        let options = {
            upsert: false,
            new: true,
            setDefaultsOnInsert: true,
            projection: {password: false}
        };

        User.findOneAndUpdate(query, update, options, function (error, user) {
            if (error) {
                return callback(8, 'Find and Update failed', 420, error, null);
            }

            if (user) {
                return callback(null, null, 200, null, user);
            }
            else{
                return callback(8, 'User is Unavailable', 400, null, null);
            }
        });
    }
    catch (error){
        return callback(8, 'Update failed', 400, error, null);
    }
}

export function CheckUserAvailability (accessUserId, accessUserRight, accessLoginName, callback){
    try {
        if (!Utils.VariableTypeChecker(accessUserId, 'string')
            || !Validator.isMongoId(accessUserId)
            // || !Utils.VariableTypeChecker(accessUserRight, 'string')
            || !Utils.VariableTypeChecker(accessLoginName, 'string')) {
            return callback(8, 'invalid data', 400, 'User information is not a string', null)
        }

        User.findOne({LoginName: accessLoginName, _id: accessUserId, UserRight: accessUserRight}, function(error, user) {
            if(error) {
                return callback(8, 'Find User Failed', 420, error, null);
            }

            if(user) {
                return callback(null, null, 200, null, user);
            }
            else {
                return callback(8, 'User is Unavailable', 404, 'Not Found Any User', null);
            }
        });
    }
    catch (error) {
        return callback(8, 'Check User Availability Failed', 400, error, null);
    }
}












