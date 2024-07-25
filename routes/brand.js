const express=require('express');

const router=express.Router();

const brandController= require ('../controllers/brand');

router.get('/',brandController.getAllBrand);
router.get('/:id',brandController.getBrandById);
router.post('/',brandController.createBrand);   
router.patch('/:id',brandController.updateBrand);  
router.delete('/:id',brandController.deleteBrand); 



module.exports=router;