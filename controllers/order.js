const orderRepositories= require ('../repositories/order');
const Order=require('../models/order');
const orderServices=require('../services/order');
async function getAllOrder(req,res)
{
    const orders=await orderRepositories.getAllOrder();
     res.status(200).json(orders);

};

async function getOrderById(req,res)
{
    const id=req.params.id;
    const order=await orderRepositories.getOrderById(id);
     res.status(200).json(order);

};

async function createOrder(req,res)
{
     var items=req.body.order_items ;

            try{
             
              const totalAmount=await orderServices.orderTotalAmount(items);
              console.log("tot:",totalAmount);
              const newOrder=new Order({
                customer:req.body.customer,
                order_date:req.body.order_date,
                order_items:req.body.order_items , 
                total_amount:totalAmount

             });
             console.log("new:",newOrder);
             const order=await orderRepositories.createOrder(newOrder);
              res.status(200).json(order);
            }catch(error){
                res.status(400).json({message:error.message});
            }   

};

async function updateOrder(req,res)
{
    const id=req.params.id;
    const data=req.body;
try{
    const result=await orderRepositories.updateOrder(id,data);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

async function deleteOrder(req,res)
{
    const id=req.params.id;
try{
    const result=await orderRepositories.deleteOrder(id);
    res.status(200).json(result);
   }catch(error){
    res.status(500).json({message:error.message});
   };  
    

};

module.exports={
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};