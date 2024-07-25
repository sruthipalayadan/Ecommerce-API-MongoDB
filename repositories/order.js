const Order=require('../models/order');

async function getAllOrder()
{
    const order=await Order.find().populate('customer');
    console.log('customer:',order);
    return order;

};

async function getOrderById(id)
{
    const order=await Order.findById(id).populate('customer');
    console.log(order);
    return order;
};

async function createOrder(newOrder)
{
    const saveData= await newOrder.save(); 
    return saveData; 
};

async function updateOrder(id,data)
{
    const result=await Order.findByIdAndUpdate(id,data);
    return result;
};
async function deleteOrder(id)
{
    const result=await Order.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllOrder,
    getOrderById,
    createOrder,
    deleteOrder,
    updateOrder
}