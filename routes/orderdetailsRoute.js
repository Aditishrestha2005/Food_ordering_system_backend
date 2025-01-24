const express= require('express')
const router = express.Router();

const orderdetailsController = require('../controller/orderdetailsController') 
router.post('/create_test',orderdetailsController.createTest);
router.get('/show_test',orderdetailsController.getTest);

router.put('/:id', orderdetailsController.updateUser);
router.delete('/:id', orderdetailsController.deleteUser);
 
module.exports=router;
