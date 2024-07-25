
const Category=require('../models/categories');




async function getAllCategory()
{
    const categories=await Category.find();
    console.log('categories:',categories);
    return categories;

};

async function getCategoryById(id)
{
    const category=await Category.findById(id);
    console.log(category);
    return category;
};

async function createCategory(newCategory)
{
    const saveData= await newCategory.save(); 
    return saveData; 
};

async function updateCategory(id,data)
{
    const result=await Category.findByIdAndUpdate(id,data);
    return result;
};
async function deleteCategory(id)
{
    const result=await Category.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllCategory,
    getCategoryById,
    createCategory,
    deleteCategory,
    updateCategory
}