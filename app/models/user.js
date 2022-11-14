import mongoose from "mongoose";

const UserDBSchema = new mongoose.Schema({
    UserName: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    LoginName: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required:  true
    },
    Password: {
        type: String,
        required:  true
    },
    UserRight: {
        type: String,
        required:  true
    },
    Email: {
        type: String,
        required: true,
    },
    RegisterDate: {
        type: Date,
        default: Date.now
    },
    CreatedBy: {
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

const users = mongoose.model('Users', UserDBSchema);

export default users;