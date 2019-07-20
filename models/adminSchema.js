var mongoose=require('mongoose');
var schema=mongoose.Schema;
var dataSchema=new schema(
{
        name:{type:String},
        password:{type:String}
});
module.exports=mongoose.model('adminBloodBank',dataSchema);

