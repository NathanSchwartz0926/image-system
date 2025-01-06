import adminUserModel from "../models/adminUserModel.js";

const loginAdminAcc = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await adminUserModel.findOne({username})

        if(!user){
            return res.json({success : false, message : "Username Doesn't Exists"})
        }

        if(user.password === password){
            res.json({success : true})
        }else{
            res.json({success : false, message : "Invalid Credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}


const addAdminUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const exits = await adminUserModel.findOne({username})
        if(exits){
            return res.json({success : false, message : "Account Already Exists"})
        }

        const newAdminUser = new adminUserModel({
            username,
            password
        })

        const user = await newAdminUser.save()

        res.json({success : true, message : "Account Created Successfully"})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

export { addAdminUser, loginAdminAcc }