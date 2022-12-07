import * as Utils from '../utils/utilFuncs.js'
import Comment from '../models/comment.js'
import Validator from 'validator';
import Question from "../models/question.js";


export function Delete(CommentID, accessUserRight, accessUserId, callback) {
    try{
        if(!Utils.VariableTypeChecker(CommentID, 'string') || !Validator.isMongoId(CommentID)) {
            return callback(8, 'invalid_id', 400, 'Comment id is not a string');
        }
        let query = {_id: CommentID};
        Comment.findOne(query, function(error, comment) {
            if(error) {
                return callback(8, 'The comment is not exist', 420, error);
            }
            else {
                if(comment){
                    if(accessUserRight !== "ADMIN" && accessUserId !== comment.UserID) {
                        return callback (8, 'Permission error', 403, "You have no permission to perform this request")
                    }
                    else if ((accessUserRight === "ADMIN" &&  accessUserId !== comment.UserID) ||
                        (accessUserRight !== "ADMIN" &&  accessUserId === comment.UserID)){
                        comment.remove(function(error) {
                            if(error) {
                                return callback(8, 'Remove failed', 420, error);
                            }
                            return  callback(null, null, 200, null, comment);
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
        return callback(8, 'Delete comment failed', 400, error)
    }
}

export function Update (AccessUserId, CommentId, UpdateData, callback) {
    try {
        let query = {_id: CommentId}

        Comment.findOne (query, function(error, comment) {
            if(error) {
                return callback(8, 'The comment is not exist', 420, error);
            }
            else if(AccessUserId !== comment.UserID) {
                return callback(8, 'Permission error', 403, 'Only the owner can edit the question');
            }
            else {
                let update = {};

                let options = {
                    upsert: false,
                    new: true,
                    setDefaultsOnInsert: true
                };

                if(Utils.VariableTypeChecker(UpdateData.CContent, 'string')) {
                    update.CContent = UpdateData.CContent;
                }

                Comment.findOneAndUpdate(query, update, options, function (error, updatedComment) {
                    if (error) {
                        return callback(8, 'Update failed', 420, error, null);
                    }
                    if (updatedComment) {
                        console.log(updatedComment)
                        return callback(null, null, 200, null, updatedComment)
                    }
                    else {
                        return callback(8, 'Comment is not available', 400, null, null)
                    }
                });
            }
        })
    } catch (err) {
        return callback(8, 'Update failed', 400, err, null)
    }
}