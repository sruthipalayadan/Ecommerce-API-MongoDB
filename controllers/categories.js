const categoryRepositories= require ('../repositories/categories');
const Category=require('../models/categories');

async function getAllCategory(req,res)
{
    const categories=await categoryRepositories.getAllCategory();
     res.status(200).json(categories);

};

async function getCategoryById(req,res)
{
    const id=req.params.id;
    const category=await categoryRepositories.getCategoryById(id);
     res.status(200).json(category);

};

async function createCategory(req,res)
{

    const newCategory=new Category({
               name:req.body.name
               });
            try{
              const category=await categoryRepositories.createCategory(newCategory);
              res.status(200).json(category);
            }catch{
                res.status(400).json({message:error.message});
            }   

};

async function updateCategory(req,res)
{
    const id=req.params.id;
    const data=req.body;
try{
    const result=await categoryRepositories.updateCategory(id,data);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function deleteCategory(req,res)
{
    const id=req.params.id;
try{
    const result=await categoryRepositories.deleteCategory(id);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

module.exports={
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};