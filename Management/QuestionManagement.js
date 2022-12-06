import * as Utils from '../utils/utilFuncs.js'
import Question from '../models/question.js'
import Validator from 'validator';


export function Delete(QuestionID, accessUserRight, accessUserId, callback) {
    try{
        if(!Utils.VariableTypeChecker(QuestionID, 'string') || !Validator.isMongoId(QuestionID)) {
            return callback(8, 'invalid_id', 400, 'Question id is not a string');
        }
        let query = {_id: QuestionID};
        Question.findOne(query, function(error, question) {
            if(error) {
                return callback(8, 'The question is not exist', 420, error);
            }
            else {
                if(question){
                    if(accessUserRight !== "ADMIN" && accessUserId !== question.UserID) {
                        return callback (8, 'Permission error', 403, "You have no permission to perform this request")
                    }
                    else if ((accessUserRight === "ADMIN" &&  accessUserId !== question.UserID) ||
                        (accessUserRight !== "ADMIN" &&  accessUserId === question.UserID)){
                        question.remove(function(error) {
                            if(error) {
                                return callback(8, 'Remove failed', 420, error);
                            }
                            return  callback(null, null, 200, null, question);
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
        return callback(8, 'Delete question failed', 400, error)
    }
}

export function Update (AccessUserId, QuestionId, UpdateData, callback) {
    try {
        let query = {_id: QuestionId}

        Question.findOne (query, function(error, question) {
            if(error) {
                return callback(8, 'The question is not exist', 420, error);
            }
            else if(AccessUserId !== question.UserID) {
                return callback(8, 'Permission error', 403, 'Only the owner can edit the question');
            }
            else {
                let update = {};

                let options = {
                    upsert: false,
                    new: true,
                    setDefaultsOnInsert: true
                };

                if(Utils.VariableTypeChecker(UpdateData.QContent, 'string')) {
                    update.QContent = UpdateData.QContent;
                }
                if(Utils.VariableTypeChecker(UpdateData.Title, 'string')) {
                    update.Title = UpdateData.Title;
                }
                if(Utils.VariableTypeChecker(UpdateData.TagName, 'string')) {
                    update.TagName = UpdateData.TagName;
                }

                Question.findOneAndUpdate(query, update, options, function (error, updatedQuestion) {
                    if (error) {
                        return callback(8, 'Update failed', 420, error, null);
                    }
                    if (updatedQuestion) {
                        console.log(updatedQuestion)
                        return callback(null, null, 200, null, updatedQuestion)
                    }
                    else {
                        return callback(8, 'Question is not available', 400, null, null)
                    }
                });

                // question.update(options, update, function (error, updatedQuestion) {
                //     if (error) {
                //         return callback(8, 'Update failed', 420, error, null);
                //     }
                //     if (updatedQuestion) {
                //         return callback(null, null, 200, null, question)
                //     }
                //     else {
                //         return callback(8, 'Question is not available', 400, null, null)
                //     }
                // });
            }
        })
    } catch (err) {
        return callback(8, 'Update failed', 400, err, null)
    }
}