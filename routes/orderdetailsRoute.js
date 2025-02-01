const express= require('express')
const router = express.Router();

const orderdetailsController = require('../controllers/orderdetailsController') 
// Routes
router.post('/create', orderdetailsController.createOrderDetail); // Create a new order detail
router.get('/', orderdetailsController.getAllOrderDetails); // Get all order details
router.get('/:id', orderdetailsController.getOrderDetailById); // Get an order detail by ID
router.put('/:id', orderdetailsController.updateOrderDetail); // Update an order detail
router.delete('/:id', orderdetailsController.deleteOrderDetail); // Delete an order detail
module.exports=router;
