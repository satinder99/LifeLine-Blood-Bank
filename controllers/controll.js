var mongoose=require('mongoose');
var donars=require('../models/schema.js');
var requestBlood=require('../models/requestSchema.js');
var admin=require('../models/adminSchema.js');
var feedback=require('../models/feedBack_schema.js');

exports.list_all_request=function(req,res)
{
	requestBlood.find({},function(err,result)
	{
		if(err) throw err;
		res.json(result);
	});
};

exports.list_all_donars=function(req,res)
{
	donars.find({},function(err,result)
	{
		if(err) throw err;
		res.json(result);
	});
};

exports.delete_a_donar=function(req,res)
{
	donars.delete({'email':req.params.email},function(err,result)
	{
		if(err) throw err;
		res.redirect('/#!admin/donarList');
	});
};

exports.create_a_donar=function(req,res)
{
	console.log(req.body);
	var new_donar=new donars(
				{
					'name':req.body.myName,
					'age':req.body.myAge,
					'email':req.body.myEmail,
					'gender':req.body.myGender,
					'bgrp':req.body.myBloodGroup,
					'disa':req.body.myDisabilities,
					'address':req.body.myAddress,
					'phone':req.body.myPhone
				});
	new_donar.save(function(err,result)
	{
		if(err) throw err;
		res.redirect('/#!donate');
		console.log('inserted');
	});
};

exports.create_a_request=function(req,res)
{
	console.log(req.body);
	var new_request=new requestBlood(
				{
					'name':req.body.myName,
					'hospitalName':req.body.myHospital,
					'email':req.body.myEmail,
					'gender':req.body.myGender,
					'bgrp':req.body.myBloodGroup,
					'bloodCount':req.body.myBottles,
					'address':req.body.myAddress,
					'phone':req.body.myPhone
				});
	new_request.save(function(err,result)
	{
		if(err) throw err;
		res.redirect('/#!request');
		console.log('inserted');
	});
};


exports.read_a_student=function(req,res)
{
	donars.find({'name':req.param.name},function(err,res)
	{
		res.json(result);
	});
};
exports.request_blood=function(req,res)
{
	donars.find({'bgrp':req.body.myBloodGroup},function(err,result)
	{
		res.json(result);
//		res.redirect('/#!result/searchResult');
		console.log('blood request fulfill');
	});
};
exports.admin_login=function(req,res)
{
	admin.find({$and:[{'name':req.body.myAdmin},{'password':req.body.myPassword}]},function(err,result)
	{
		if(err) throw err
		console.log(result);
		console.log(result.length);
		if(result.length>=1)
		{	res.redirect('/#!admin/index');}
	//	if(result[0].password==req.body.myPassword)
	//	{
		else
		{
			res.send('wrong');
		}
	
	//	else
	//	{
	//		res.send('wrong!!!!');
	//	}
	});
};
exports.create_a_admin=function(req,res)
{
	var newAdmin=new admin({'name':req.body.myNewAdmin,
				'password':req.body.myNewAdminPassword});
	newAdmin.save(function(err,result)
	{
		console.log('result');
		console.log(result);
		res.redirect('/#!admin');
	});
	admin.find({},function(err,result)
		{
			console.log(result);
		});
};
exports.read_a_stu_name=function(req,res)
{
	donars.find({'name':req.param.name},function(err,result)
	{
		res.json(result);
	});
};
exports.create_a_feedBack=function(req,res)
{
	var fb = new feedback({'name':req.body.myName,
				'email':req.body.myEmail,
				'city':req.body.myCity,
				'phone':req.body.myPhone,
				'message':req.body.myText
				});
	fb.save(function(err,result)
	{
		res.redirect('/#!contactus');
		console.log(result);
	});
};
exports.read_a_feedBack=function(req,res)
{
	feedback.find({},function(err,result)
	{
		res.json(result);
//		res.redirect('/#!result/searchResult');
	});
};

