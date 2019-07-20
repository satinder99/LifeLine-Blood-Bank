var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.redirect('/', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index.html');
});
/*router.get('/home',function(req,res)
{
	res.render('../template/home.html');
});*/


module.exports = router;
