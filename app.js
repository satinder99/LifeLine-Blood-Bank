var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine=require('consolidate');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(express.static(__dirname+'/views'));
//api
var mongoose=require('mongoose');
var student=require('./models/schema.js');
var controllStu=require('./controllers/controll.js');
mongoose.connect('mongodb://localhost:27017/BLOODBANK',{useNewUrlParser:true});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.engine('html',engine.mustache);
app.set('view engine','html');


//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/index',indexRouter);

/*var allowCrossDomain=function(req,res,next)
{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Header','*');
	next();	
};*/
app.use(function(req,res,next)
{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Method','*');
	res.header('Access-Control-Allow-Headers','*');
//	res.header('X-Content-Type-Options: nosniff');
	next();
});

//app.use(allowCrossDomain);
app.route('/request')
	.get(controllStu.request_blood)
	.post(controllStu.create_a_request);

app.route('/donate')
	.post(controllStu.create_a_donar);
app.route('/request/searchResult')
	.post(controllStu.request_blood)
	.get(controllStu.request_blood);
app.route('/admin').post(controllStu.admin_login);
app.route('/admin/requestList')
	.get(controllStu.list_all_request);
app.route('/admin/donarList')
	.get(controllStu.list_all_donars);
app.route('/admin/newAdmin').post(controllStu.create_a_admin);
app.route('/contactus').post(controllStu.create_a_feedBack);
app.route('/admin').get(controllStu.read_a_feedBack);
app.route('/admin/:email').delete(controllStu.delete_a_donar);

module.exports = app;
