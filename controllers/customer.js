const customerRepositories= require ('../repositories/customer');
const Customer=require('../models/customer');

async function getAllCustomers(req,res)
{
    const customer=await customerRepositories.getAllCustomers();
     res.status(200).json(customer);

};

async function getCustomerById(req,res)
{
    const id=req.params.id;
    const customer=await customerRepositories.getCustomerById(id);
     res.status(200).json(customer);

};

async function createCustomer(req,res)
{

    const newCustomer=new Customer({
               name:req.body.name,
               address:req.body.address,
               contact:req.body.contact
            });
            console.log("new:",newCustomer);
            try{
              const customer=await customerRepositories.createCustomer(newCustomer);
              res.status(200).json(customer);
            }catch{
                res.status(400).json({message:error.message});
            }   

};

async function updateCustomer(req,res)
{
    const id=req.params.id;
    const data=req.body;
try{
    const result=await customerRepositories.updateCustomer(id,data);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function deleteCustomer(req,res)
{
    const id=req.params.id;
try{
    const result=await customerRepositories.deleteCustomer(id);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};