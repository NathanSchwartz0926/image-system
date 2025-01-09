import express from "express"
import { loginBankAcc, addBankAcc, getBankAccInfo } from "../controller/bankAccController.js"

const bankAccRouter = express.Router()

bankAccRouter.post('/login', loginBankAcc)
bankAccRouter.post('/addbank', addBankAcc)
bankAccRouter.post('/getbankinfo', getBankAccInfo)

export default bankAccRouter