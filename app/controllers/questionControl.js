import questions from "../models/question.js";
import MongodbConfig from "../configs/MongodbConfig.js";

export async function AddQuestion(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        console.log(req.query)
        const NewQuestion = new questions(req.body);
        NewQuestion.UserID = accessUerId;
        const QuestionInsertData = await questions.insertMany(NewQuestion);
        if(!QuestionInsertData) {
            throw new Error("Can not upload your question!");
        }
        else {
            res.json({
                message: "Your question has been posted",
                Question: QuestionInsertData,
            })
        }
    }
    catch (error) {
        res.status(404).send(error);
    }
}