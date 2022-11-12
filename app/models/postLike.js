import mongoose from 'mongoose'

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const QuestionDBSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true,
    },
    QuestionID: {
        type: String,
    },
    AnswerID: {
        type: String,
    },
    CommentID: {
        type: String,
    },
    PostLikeDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    IsDeleted: {
        type: Boolean
    },
    DeletedDate: {
        type: Date
    }
}, {
    collection: 'PostLikes',
    versionKey: false
})

const questions = mongoose.model('PostLikes', QuestionDBSchema);
export default questions;