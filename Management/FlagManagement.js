import * as Utils from '../utils/utilFuncs.js'
import Flag from '../models/flag.js'
import Validator from 'validator';


export function Delete(FlagID, accessUserRight, accessUserId, callback) {
    try{
        if(!Utils.VariableTypeChecker(FlagID, 'string') || !Validator.isMongoId(FlagID)) {
            return callback(8, 'invalid_id', 400, 'Flag id is not a string');
        }
        let query = {_id: FlagID};
        Flag.findOne(query, function(error, flag) {
            if(error) {
                return callback(8, 'The flag is not exist', 420, error);
            }
            else {
                if(flag){
                    if(accessUserId !== flag.UserID) {
                        return callback (8, 'Permission error', 403, "Only owner can perform this request")
                    }
                    else if (accessUserId === flag.UserID){
                        flag.remove(function(error) {
                            if(error) {
                                return callback(8, 'Remove failed', 420, error);
                            }
                            return  callback(null, null, 200, null, flag);
                        });
                    }
                    else {
                        return callback(null, null, 200, null);
                    }
                }
            }
        });
    }
    catch (error) {
        return callback(8, 'Delete flag failed', 400, error)
    }
}

