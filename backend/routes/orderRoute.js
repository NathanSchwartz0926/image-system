import express from 'express'
import { allOrder, newOrder, bankOrder, oneBranchOrder } from "../controller/orderController.js"

const orderRouter = express.Router()

orderRouter.get('/list', allOrder)
orderRouter.post('/new', newOrder)
orderRouter.post('/oneBranch', oneBranchOrder)

export default orderRouter;