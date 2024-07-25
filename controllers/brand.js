const brandRepositories= require ('../repositories/brand');
const Brand=require('../models/brand');

async function getAllBrand(req,res)
{
    const brands=await brandRepositories.getAllBrand();
     res.status(200).json(brands);

};

async function getBrandById(req,res)
{
    const id=req.params.id;
    const brand=await brandRepositories.getBrandById(id);
     res.status(200).json(brand);

};

async function createBrand(req,res)
{

    const newBrand=new Brand({
               name:req.body.name
               });
            try{
              const brand=await brandRepositories.createBrand(newBrand);
              res.status(200).json(brand);
            }catch{
                res.status(400).json({message:error.message});
            }   

};

async function updateBrand(req,res)
{
    const id=req.params.id;
    const data=req.body;
try{
    const result=await brandRepositories.updateBrand(id,data);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function deleteBrand(req,res)
{
    const id=req.params.id;
try{
    const result=await brandRepositories.deleteBrand(id);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};


module.exports={
    getAllBrand,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
};