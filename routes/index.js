var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,layout:'header'});
});
router.get('/adver',function(req,res,next) {
  res.render('Advertising');
});
router.get('/support',function(req,res,next){
  res.render('support',{layout:'header'});
});
router.get('/home',function(req,res,next) {
  res.render('home');
})

module.exports = router;
