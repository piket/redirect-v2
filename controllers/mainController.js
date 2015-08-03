var express = require('express');
var request = require('request');
var db = require('../models');
var router = express.Router();
var sanitize = require('../services/sanitize.js');

router.get('/', function(req,res) {
    res.redirect('http://emc.com');
});

router.get('/generate', function(req,res) {
    res.render('main/layout', {page: 'main'})
})

router.get('/redirect', function(req,res) {
    var title = req.query.t;
    var skip = Math.floor(Math.random() * 2);
    console.log("skip?",skip);

    if(!title) {
        title = req.query.r;
    }
    console.log("title?",title);

    res.render('main/layout', {page: 'form', skip: skip, redirect: req.query.r, title: title, message:"Submit and Continue to " + title});
});

router.post('/submit', function(req,res) {
    console.log("Form values:",req.body)
    var values = sanitize(req.body);
    console.log("sanitized values:",values)

    if(values === false) {
        console.log("invalid information, redirecting back to form")
        res.redirect(res.locals.lastPage);
    } else {
        db.user.create(values).then(function(user) {
            console.log("User added:",user.get());
        });
        res.redirect(req.body.action)
    }
    // res.send(req.body);
});

module.exports = router;