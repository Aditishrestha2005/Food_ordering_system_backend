const express= require('express')
const router = express.Router();

const orderController = require('../controller/orderController')
router.post('/create_test',orderController.createTest);
router.get('/show_test',orderController.getTest);

router.put('/:id',orderController.updateUser);
router.delete('/:id', orderController.deleteUser);
 
module.exports=router;
