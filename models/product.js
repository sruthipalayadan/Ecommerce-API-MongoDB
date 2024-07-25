const mongoose=require('mongoose');



const productSchema= new mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category' 
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Brand' 
    },
    price:Number,
    offerprice:Number
});
module.exports=mongoose.model('Product',productSchema);