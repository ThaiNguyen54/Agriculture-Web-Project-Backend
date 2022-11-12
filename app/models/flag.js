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
    FlagName: {
        type: String,
        required: true,
    },
    FlagDate: {
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
    collection: 'Flags',
    versionKey: false
})

const questions = mongoose.model('Flags', QuestionDBSchema);
export default questions;