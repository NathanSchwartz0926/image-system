import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
}, { minimize : false })

const adminUserModel = mongoose.models.adminUser || mongoose.model('admin', adminUserSchema)

export default adminUserModel