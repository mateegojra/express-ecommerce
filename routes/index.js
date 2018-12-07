var express = require('express');
var router = express.Router();
var hc = require('../controllers/HomeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Ecommerce' });
});

router.get('/home', hc.index);

router.get('/cats', hc.cats);

module.exports = router;
