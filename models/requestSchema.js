var mongoose=require('mongoose'); 
var schema=mongoose.Schema; 
var dataSchema=new schema( 
{ 
        name:{type:String}, 
        hospitalName:{type:String}, 
        email:{type:String}, 
        gender:{type:String}, 
        bgrp:{type:String},//blood group 
        bloodCount:{type:Number},//disabilities 
        address:{type:String}, 
        phone:{type:Number} 
}); 
module.exports=mongoose.model('requestBloodBank',dataSchema);

