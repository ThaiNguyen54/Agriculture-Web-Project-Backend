import mongoose from 'mongoose'

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const QuestionDBSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
    },
    TagName: {
        type: String
    },
    Image: {
        type: String
    },
    QContent: {
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
    collection: 'Questions',
    versionKey: false
})

const questions = mongoose.model('Questions', QuestionDBSchema);
export default questions;