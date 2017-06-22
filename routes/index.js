var express = require('express');
var router = express.Router();
var URL="mongodb://mukul:zxcvbnm@ds131782.mlab.com:31782/rish";
const db=require('monk')(URL)
const docs=db.get('pot')
    /* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    docs.find (function(err, docs){
        if(err)console.log(err)
        else  res.json(docs[0]);


    })
});

module.exports = router;
