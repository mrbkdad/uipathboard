var express = require('express');
var router = express.Router();
var user_router = require('./user_router')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/info',user_router.info);
router.get('/login',user_router.login);

module.exports = router;
