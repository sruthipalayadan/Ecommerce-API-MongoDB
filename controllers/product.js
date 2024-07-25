const productRepositories= require ('../repositories/product');
const Product=require('../models/product');

async function getAllProduct(req,res)
{
    const products=await productRepositories.getAllProduct();
     res.status(200).json(products);

};

async function getProductById(req,res)
{
    const id=req.params.id;
    const product=await productRepositories.getProductById(id);
     res.status(200).json(product);

};

async function createProduct(req,res)
{

    const newProduct=new Product({
               title:req.body.title,
               category:req.body.category,
               brand:req.body.brand,
               price:req.body.price,
               offerprice:req.body.offerprice,
               
            });
            console.log("new:",newProduct);
            try{
              const product=await productRepositories.createProduct(newProduct);
              res.status(200).json(product);
            }catch{
                res.status(400).json({message:error.message});
            }   

};

async function updateProduct(req,res)
{
    const id=req.params.id;
    const data=req.body;
try{
    const result=await productRepositories.updateProduct(id,data);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function deleteProduct(req,res)
{
    const id=req.params.id;
try{
    const result=await productRepositories.deleteProduct(id);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function getProductsByBrand(req,res)
{
    const {brandName}=req.params;
    const products=await productRepositories.getProductsByBrand(brandName);
     res.status(200).json(products);

};
async function getProductsByCategory(req,res)
{
    const {categoryName}=req.params;
    const products=await productRepositories.getProductsByCategory(categoryName);
     res.status(200).json(products);

};
module.exports={
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByBrand,
    getProductsByCategory
};