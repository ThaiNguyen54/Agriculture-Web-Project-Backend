import users from "../models/user.js"
import bcrypt from 'bcrypt';

const AddUserAccount = async(req, res) =>{

    try{
        // Hash Password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const UserData = {
            fname: req.body.fname,
            lname: req.body.lname,
            birthday: req.body.bthday,
            email: req.body.email,
            password: hashedPassword
        }
        const CheckUserData = await users.findOne({email: req.body.email});
        if(CheckUserData){
            res.status(409).send({message: "Incorrect Email/Password"});
        }
        else{
            const UserInsertData = await users.insertMany(UserData);
            if(!UserInsertData){
                throw new Error("Can not upload");
            }else{
                res.send(UserInsertData);
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

export default AddUserAccount;