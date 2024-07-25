const express=require('express');

const router=express.Router();

const productController= require ('../controllers/product');

router.get('/',productController.getAllProduct);
router.get('/:id',productController.getProductById);
router.post('/',productController.createProduct);   
router.patch('/:id',productController.updateProduct);  
router.delete('/:id',productController.deleteProduct); 

router.get('/brand/:brandName',productController.getProductsByBrand);
router.get('/category/:categoryName',productController.getProductsByCategory);


module.exports=router;