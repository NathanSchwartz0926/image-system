import express from "express"
import { loginAdminAcc, addAdminUser } from "../controller/adminUserController.js"

const adminAccRouter = express.Router()

adminAccRouter.post('/login', loginAdminAcc)
adminAccRouter.post('/adduser', addAdminUser)

export default adminAccRouter;