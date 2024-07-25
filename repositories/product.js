const { getAllProductByBrand } = require('../controllers/product');
const Product=require('../models/product');
const Brand=require('../models/brand');
const Category=require("../models/categories");


async function getAllProduct()
{
    const products=await Product.find().populate(['category','brand']);
    console.log('products:',products);
    return products;

};

async function getProductById(id)
{
    const product=await Product.findById(id).populate(['category','brand']);
    console.log(product);
   
    return product;
};

async function createProduct(newProduct)
{
    const saveData= await newProduct.save(); 
    return saveData; 
};

async function updateProduct(id,data)
{
    const result=await Product.findByIdAndUpdate(id,data);
    return result;
};
async function deleteProduct(id)
{
    const result=await Product.findByIdAndDelete(id);
    return   result;
};


async function getProductsByBrand (categoryName) {
    try {
      const brand = await Brand.findOne({ name: brandName });
      console.log("b:",brand);
      if (!brand) {
        throw error;
      }
      const products = await Product.find({ brand: brand._id }).populate(['category','brand']);
      return products;
    } catch (error) {
      console.error('Error finding products by brand name:', error);
      throw error;
    }
  };

  const getProductsByCategory= async (categoryName) => {
    try {
      const category= await Category.findOne({ name: categoryName });
      console.log("b:",category);
      if (!category) {
        throw error;
      }
      const products = await Product.find({ category: category._id }).populate(['category','brand']);
      return products;
    } catch (error) {
      console.error('Error finding products by category name:', error);
      throw error;
    }
  };


module.exports={
    getAllProduct,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
    getProductsByBrand,
    getProductsByCategory
}