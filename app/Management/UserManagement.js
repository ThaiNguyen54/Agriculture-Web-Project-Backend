// import Validator from 'validator'
import * as Utils from '../utils/utilFuncs.js'
import User from '../models/user.js'
import bcrypt  from "bcryptjs";


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