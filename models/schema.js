var mongoose=require('mongoose');
var schema=mongoose.Schema;
var dataSchema=new schema(
{
	name:{type:String},
	age:{type:Number},
	email:{type:String},
	gender:{type:String},
	bgrp:{type:String},//blood group
	disa:{type:String},//disabilities
	address:{type:String},
	phone:{type:Number}
});
module.exports=mongoose.model('donarsOfBloodBank',dataSchema);
