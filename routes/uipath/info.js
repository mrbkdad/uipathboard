var express = require('express');
var router = express.Router();
var orch = require('./orchestrator');
var api = new orch('jwpark', 'admin', '813102@bk363', 'https://platform.uipath.com/jwpark/jwpark/');

/* GET Total Jobs List. */
router.get('/:method', function(req, res, next) {
  console.log(req.params.method + " API Start......");
  var info = api.getInfos(req.params.method, "");
  var resultCount = info["@odata.count"];
  if(resultCount == undefined){
      console.log("@@Null")
      res.status('201').send('Api or Data not found!');
  }else{
      console.log("@@Result Count : " + resultCount);
      //console.log(info['value']);
      res.status('200').send(info['value']);
  }
  res.end();
});

/* GET filted Jobs List. */
router.get('/:method/:to', function(req, res, next) {
  console.log(req.params.method + " API Start......");
  console.log(req.params.to + " Filter le ......");
  var filter = "StartTime lt " + req.params.to +"T00:00:00.00Z"
  var info = api.getInfos(req.params.method, filter);
  var resultCount = info["@odata.count"];
  if(resultCount == undefined){
      console.log("@@Null")
      res.status('201').send('Api or Data not found!');
  }else{
      console.log("@@Result Count : " + resultCount);
      //console.log(info['value']);
      res.status('200').send(info['value']);
  }
  res.end();
});

/* GET filted Jobs List. */
router.get('/:method/:from/:to', function(req, res, next) {
  console.log(req.params.method + " API Start......");
  console.log(req.params.from + " Filter gt ......");
  console.log(req.params.to + " Filter le ......");
  var filter = "StartTime ge " + req.params.from + "T00:00:00.00Z and StartTime lt " + req.params.to + "T00:00:00.00Z";
  var info = api.getInfos(req.params.method, filter);
  var resultCount = info["@odata.count"];
  if(resultCount == undefined){
      console.log("@@Null")
      res.status('201').send('Api or Data not found!');
  }else{
      console.log("@@Result Count : " + resultCount);
      //console.log(info['value']);
      res.status('200').send(info['value']);
  }
  res.end();
});

module.exports = router;
