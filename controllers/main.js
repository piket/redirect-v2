var request = require('request');
var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', function(req,res) {
    res.send(req.params);
});

router.post('/api', function(req,res) {
    res.send(req.params);
});