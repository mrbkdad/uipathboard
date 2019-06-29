var express = require('express');
var router = express.Router();
var orch = require('./orchestrator');
var api = new orch('jwpark', 'admin', '813102@bk363', 'https://platform.uipath.com/jwpark/jwpark/');

/* GET home page. */
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

module.exports = router;
