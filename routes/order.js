const express=require('express');

const router=express.Router();

const orderController= require ('../controllers/order');

router.get('/',orderController.getAllOrder);
router.get('/:id',orderController.getOrderById);
router.post('/',orderController.createOrder);   
router.patch('/:id',orderController.updateOrder);  
router.delete('/:id',orderController.deleteOrder); 




module.exports=router;