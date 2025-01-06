import express from "express"
import { loginBankAcc, addBankAcc } from "../controller/bankAccController.js"

const bankAccRouter = express.Router()

bankAccRouter.post('/login', loginBankAcc)
bankAccRouter.post('/addbank', addBankAcc)

export default bankAccRouter