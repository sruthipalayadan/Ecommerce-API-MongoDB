const mongoose=require('mongoose');



const brandSchema= new mongoose.Schema({
    name:{
        require:true,
        type:String
    }
});
module.exports=mongoose.model('Brand',brandSchema);