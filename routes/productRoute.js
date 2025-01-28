const express= require('express')
const router = express.Router();

const menuController = require('../controller/menuController');
router.post('/create_test',menuController.createTest);
router.get('/show_test',menuController.getTest);

router.put('/:id',menuController.updateUser);
router.delete('/:id', menuController.deleteUser);
 
module.exports=router;
    