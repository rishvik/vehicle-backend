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
router.get('/find', function(req, res, next) {

    docs.find({"name":"rishvik"} ,function(err, docs){
        if(err)console.log(err);
        else  res.json(docs[0]);


    })
});
router.post('/insert', function(req, res, next) {
    var flname=req.body.fname;
    var username=req.body.name;
    var pass=req.body.password;
    var cty=req.body.city;

    docs.insert({"fullname": flname,"name":username, "password":pass,"city":cty} ,function(err, docs){
        if(err)console.log(err);
        else  res.json(docs[0]);


    })
});

module.exports = router;
