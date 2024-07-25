const Brand=require('../models/brand');




async function getAllBrand()
{
    const brands=await Brand.find();
    console.log('brands:',brands);
    return brands;

};

async function getBrandById(id)
{
    const brand=await Brand.findById(id);
    console.log(brand);
    return brand;
};

async function createBrand(newBrand)
{
    const saveData= await newBrand.save(); 
    return saveData; 
};

async function updateBrand(id,data)
{
    const result=await Brand.findByIdAndUpdate(id,data);
    return result;
};
async function deleteBrand(id)
{
    const result=await Brand.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllBrand,
    getBrandById,
    createBrand,
    deleteBrand,
    updateBrand
}