const Customer=require('../models/customer');




async function getAllCustomers()
{
    const customer=await Customer.find();
    console.log('customer:',customer);
    return customer;

};

async function getCustomerById(id)
{
    const customer=await Customer.findById(id);
    console.log(customer);
    return customer;
};

async function createCustomer(newCustomer)
{
    const saveData= await newCustomer.save(); 
    return saveData; 
};

async function updateCustomer(id,data)
{
    const result=await Customer.findByIdAndUpdate(id,data);
    return result;
};
async function deleteCustomer(id)
{
    const result=await Customer.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    deleteCustomer,
    updateCustomer
}