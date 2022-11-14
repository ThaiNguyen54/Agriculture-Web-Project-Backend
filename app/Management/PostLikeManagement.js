import * as Utils from '../utils/utilFuncs.js'
import PostLike from '../models/postLike.js'
import Validator from 'validator';


export function Delete(PostLikeID, accessUserRight, accessUserId, callback) {
    try{
        if(!Utils.VariableTypeChecker(PostLikeID, 'string') || !Validator.isMongoId(PostLikeID)) {
            return callback(8, 'invalid_id', 400, 'Like id is not a string');
        }
        let query = {_id: PostLikeID};
        PostLike.findOne(query, function(error, postLike) {
            if(error) {
                return callback(8, 'The like is not exist', 420, error);
            }
            else {
                if(postLike){
                    if(accessUserId !== postLike.UserID) {
                        return callback (8, 'Permission error', 403, "Only owner can perform this request")
                    }
                    else if (accessUserId === postLike.UserID){
                        postLike.remove(function(error) {
                            if(error) {
                                return callback(8, 'Remove failed', 420, error);
                            }
                            return  callback(null, null, 200, null, PostLike);
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
        return callback(8, 'Delete like failed', 400, error)
    }
}

