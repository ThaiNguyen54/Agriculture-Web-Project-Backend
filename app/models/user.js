import mongoose from "mongoose";

const UserDBSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    birthday: Date,
    email: String,
    password: String
})

const users = mongoose.model('users', UserDBSchema);

export default users;