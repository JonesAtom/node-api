var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let response = {
    status: true,
    data:{
      name: '建瓯市',
      id:23
    }
  }
  res.send(JSON.stringify(response))
  // res.render('index', { title: 'Express'});

});

router.get('/info', function(req, res, next) {
  let response = {
    status: true,
    data:{
      name: '建瓯市2',
      id:2300
    }
  }
  res.send(JSON.stringify(response))
  // res.render('index', { title: 'Express'});

});

module.exports = router;