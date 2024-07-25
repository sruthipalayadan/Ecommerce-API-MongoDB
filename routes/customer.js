const express=require('express');

const router=express.Router();
const Customer=require('../models/customer');
const customerController= require ('../controllers/customer');

router.get('/',customerController.getAllCustomers);
router.get('/:id',customerController.getCustomerById);
router.post('/',customerController.createCustomer);   
router.patch('/:id',customerController.updateCustomer);  
router.delete('/:id',customerController.deleteCustomer); 


module.exports=router;