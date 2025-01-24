const express= require('express')
const router = express.Router();

const restaurantController = require('../controller/restaurantController') 
router.post('/create_test',restaurantController.createTest);
router.get('/show_test',restaurantController.getTest);

router.put('/:id', restaurantController.updateUser);
router.delete('/:id', restaurantController.deleteUser);
 
module.exports=router;

