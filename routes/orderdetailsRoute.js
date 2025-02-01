const express= require('express')
const router = express.Router();

const orderdetailsController = require('../controllers/orderdetailsController') 
// Routes
router.post('/create', orderdetailsController.createorderdetail); // Create a new order detail
router.get('/', orderdetailsController.getallorderdetails); // Get all order details
router.get('/:id', orderdetailsController.getorderdetailbyid); // Get an order detail by ID
router.put('/:id', orderdetailsController.updateorderdetail); // Update an order detail
router.delete('/:id', orderdetailsController.deleteorderdetail); // Delete an order detail
module.exports=router;
