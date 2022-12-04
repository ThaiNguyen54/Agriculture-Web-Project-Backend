import mongoose from 'mongoose'

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const QuestionDBSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true,
    },
    // QuestionID: {
    //     type: String,
    // },
    AnswerID: {
        type: String,
    },
    CContent: {
        type: String,
    },
    PostedDate: {
        type: Date,
        default: Date.now,
    },
    EditedDate: {
        type: Date
    },
    isDeleted: {
        type: Boolean
    },
    DeletedDate: {
        type: Date
    }
}, {
    collection: 'Comments',
    versionKey: false
})

const questions = mongoose.model('Comments', QuestionDBSchema);
export default questions;