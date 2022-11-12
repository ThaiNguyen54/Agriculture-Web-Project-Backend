import mongoose from 'mongoose'

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
const QuestionDBSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true,
    },
    BadgeName: {
        type: String,
        required: true,
    },
    ReceivedDate: {
        type: Date,
    }
}, {
    collection: 'Badges',
    versionKey: false
})

const questions = mongoose.model('Badges', QuestionDBSchema);
export default questions;