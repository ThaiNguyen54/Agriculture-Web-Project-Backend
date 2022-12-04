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
        required: true,
    },
    AContent: {
        type: String,
        required: true,
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
    collection: 'Answers',
    versionKey: false
})

const questions = mongoose.model('Answers', QuestionDBSchema);
export default questions;