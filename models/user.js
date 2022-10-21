import mongoose from "mongoose";

const UserDBSchema = new mongoose.Schema({
    UserName: {
        type: String,
        minlength: 1,
        maxlength: 64
    },
    LoginName: {
        type: String,
        minlength: 1,
        maxlength: 64
    },
    Password: {
        type: String
    },
    UserRight: {
        type: String
    },
    Email: {
        type: String,
        required: true,
    },
    RegisterDate: {
        type: Date
    },
    CreateBy: {
        type: String
    },
    UpdatedBy: {
        type: String
    },
    UpdatedDate: {
        type: Date
    }
},
    {
        collection: 'Users', // Define collection for User entity
        versionKey: false
    })

const users = mongoose.model('users', UserDBSchema);

export default users;