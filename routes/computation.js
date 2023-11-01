
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    x=req.query.x;
    y=req.query.y;
    if(x==undefined && y==undefined)
    x=(Math.random()*100);
    y=(Math.random()*100);

    hyp=Math.hypot(x,y);
    ce=Math.ceil(x);
    cl=Math.clz32(x);
    res.send(`hypot of ${x,y} is ${hyp},ceil of ${x} is ${ce} and clz32 of ${x} is ${cl}`);
  
});

module.exports = router;