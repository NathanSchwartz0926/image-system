import express from 'express'
import { allOrder, newOrder, bankOrder } from "../controller/orderController.js"

const orderRouter = express.Router()

orderRouter.get('/list', allOrder)
orderRouter.post('/new', newOrder)

export default orderRouter;