import users from "../models/user.js"
import bcrypt from 'bcryptjs';

export const AddUserAccount = async(req, res) =>{

    try{
        // Hash Password
        const hashedPassowrd = await bcrypt.hash(req.body.Password, 10);

        const newUser = new users(req.body);
        newUser.Password = hashedPassowrd;
        const CheckUserData = await users.findOne({Email: req.body.Email});
        if(CheckUserData){
            res.status(409).send({message: "Incorrect Email/Password"});
        }
        else{
            const UserInsertData = await users.insertMany(newUser);
            if(!UserInsertData){
                throw new Error("Can not upload");
            }else{
                // res.send(UserInsertData);
                res.json({
                    message: "Created Successfully",
                    User: UserInsertData,
                })
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

export function GetAllUser(req, res){
    users.find()
        .then(allUsers => {
            return res.status(200).json({
                success: true,
                message: 'List of all users',
                users: allUsers,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Can not get users. Please try again.',
                error: err.message
            });
        });
}

export function GetUserById(req, res){
    const id = req.params.UserID;
    users.findById(id)
        .then((user) => {
            res.status(200).json({
                success: true,
                message: `Found one user with id: ${id}`,
                users: user,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Not Found.',
                error: err.message,
            });
        });
}
