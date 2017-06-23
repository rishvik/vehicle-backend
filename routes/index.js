var express = require('express');
var router = express.Router();
var URL="mongodb://mukul:zxcvbnm@ds131782.mlab.com:31782/rish";
const db=require('monk')(URL)
const docs=db.get('pot')
    /* GET home page. */
router.get('/push', function(req, res, next) {

    docs.update({"id":"567267"},{$push:{"group":{"name":"lakshman"}}} ,function(err, docs){
        if(err)console.log(err);
        else  res.json(docs);


    })
});

module.exports = router;
