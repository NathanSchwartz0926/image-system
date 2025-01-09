import bankAccModel from "../models/bankAccModel.js"


const loginBankAcc = async (req, res) => {
    try {
        const { branchName, password } = req.body

        const user = await bankAccModel.findOne({branchName})

        if(!user){
            return res.json({success : false, message : "Bank Doesn't Exists"})
        }

        if(user.password === password){
            res.json({success : true, branchInfo : user})
        }else{
            res.json({success : false, message : "Invalid Credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

const getBankAccInfo = async (req, res) => {
    try {
        const { branchName } = req.body

        const user = await bankAccModel.findOne({branchName})
        
        if(!user){
            return res.json({success : false, message : "Bank Doesn't Exists"})
        }

        res.json({success : true, branchInfo : user})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

const addBankAcc = async (req, res) => {
    try {
        const { ifsc, bankName, password, branchName, logo, address, products } = req.body

        const exits = await bankAccModel.findOne({ifsc})
        if(exits){
            return res.json({success : false, message : "Bank Account Already Exists"})
        }

        const newBankAcc = new bankAccModel({
            ifsc,
            bankName,
            password,
            branchName,
            logo,
            address,
            products
        })

        const user = await newBankAcc.save()

        res.json({success : true, message : "Account Created Successfully"})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message})
    }
}

export { loginBankAcc, addBankAcc, getBankAccInfo }