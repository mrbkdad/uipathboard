var express = require('express');
var router = express.Router();
var request = require('request');

var api_uri = 'https://platform.uipath.com/jwpark/jwpark:443';
var key = null;

// var getAuthKey = function(req,res,next){
//   var options = {
//     uri : api_uri+'/api/Account/Authenticate',
//     method: 'POST',
//     body:{
//       tenancyName : 'jwpark',
//       usernameOrEmailAddress : 'admin',
//       password : '813102@bk363'
//     },
//     json:true
//   };
//   request.post(options, function(err,api_res,body){
//     console.log(body);
//     console.log(api_res);
//     //key = body.result;

//     next();
//   });
// }

// express.use(getAuthKey);


router.all('/',function(req,res,next){
  var options = {
    uri : api_uri+'/api/Account/Authenticate',
    method: 'POST',
    body:{
      tenancyName : 'jwpark',
      usernameOrEmailAddress : 'admin',
      password : '813102@bk363'
    },
    json:true
  };
  request.post(options, function(err,api_res,body){
    //console.log(body);
    key = null;
    if(body){
      if(body.result){
        key = body.result;
      }
    }
    console.log("result : " + key);
    next();
  });
});

router.get('/',function(req,res,next){
  console.log('@@ jobs');
  console.log(req.query);

  var filter = "", _from = "", _to = "", _and = "";
  if(req.query.from || req.query.to){
    filter = "?$filter=";
  }
  if(req.query.from && req.query.to){
    _and = " and ";
  }
  if(req.query.from){
    _from = "StartTime ge " + req.query.from +"T00:00:00.00Z";
  }
  if(req.query.to){
    _to = "StartTime lt " + req.query.to +"T00:00:00.00Z";
  }
  filter = filter + _from + _and + _to;
  console.log(filter);

  var options = {
    uri : api_uri+'/odata/Jobs'+filter,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    },
    json:true
  };
  console.log(options);
  request(options, function(err,api_res,body){
    //console.log(body);
    console.log("result : " + key);
    if(body)
    {
      res.send(body.value);
    }else{
      res.send("check your server!");
    }
    res.end();
  });
});

module.exports = router;
