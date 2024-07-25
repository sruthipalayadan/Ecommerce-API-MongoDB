const mongoose=require('mongoose');


const ordereditemsSchema= new mongoose.Schema({
    product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product' 
    },
    qty:{
        require:true,
        type:Number 
    },
    unit_price:{
        require:true,
        type:Number
    }
});


const orderSchema= new mongoose.Schema({
    customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Customer' 
    },
    order_date:{
        require:true,
        type:String 
    },
    order_items:[ordereditemsSchema],
    total_amount:{
        require:true,
        type:Number
    }
});
module.exports=mongoose.model('Order',orderSchema);