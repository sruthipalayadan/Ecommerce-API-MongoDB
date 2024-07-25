const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');


dotenv.config({path:'./config/config.env'});
const PORT=process.env.PORT ||3000;
const DB_CONNECT_STRING=process.env.DB_URL;



const CustomerRouter=require('./routes/customer');
const CategoryRouter=require('./routes/categories');  
const BrandRouter=require('./routes/brand');
const ProductRouter=require('./routes/product');
const OrderRouter=require('./routes/order');

const app=express();
app.use(express.json());

mongoose.connect(DB_CONNECT_STRING);
const database=mongoose.connection;
database.on('error',(error)=>{
    console.log("error connecting db",error);
});
database.once('connected',()=>{
    console.log("db connected sucessfully");
});

app.use('/api/v1/customers',CustomerRouter);
app.use('/api/v1/categories',CategoryRouter);
app.use('/api/v1/brands',BrandRouter);
app.use('/api/v1/products',ProductRouter);
app.use('/api/v1/orders',OrderRouter);

app.listen(PORT,()=>
{
    console.log(`listenning on port:${PORT}`);
})