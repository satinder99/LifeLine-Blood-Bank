var mongoose=require('mongoose');
var schema=mongoose.Schema;
var dataSchema=new schema(
{
        name:{type:String},
       
        email:{type:String},
        city:{type:String},
        message:{type:String},
        phone:{type:Number}
});
module.exports=mongoose.model('feedBacks',dataSchema);

