const express= require('express')
const router = express.Router();

const paymentController = require('../controller/paymentController')
router.post('/create_test',paymentController.createTest);
router.get('/show_test',paymentController.getTest);

router.put('/:id', paymentController.updateUser);
router.delete('/:id', paymentController.deleteUser);
 
module.exports=router;
