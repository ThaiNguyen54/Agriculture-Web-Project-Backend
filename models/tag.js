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
    TagName: {
        type: String,
    },
    CreatedDate: {
        type: Date,
        default: Date.now,
    }
}, {
    collection: 'Tags',
    versionKey: false
})

const questions = mongoose.model('Tags', QuestionDBSchema);
export default questions;