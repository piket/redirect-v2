var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.use(function(req,res,next) {
    res.locals.lastPage = req.header('Referrer');
    console.log(res.locals.lastPage)

    next();
});

app.use('/',require('./controllers/mainController.js'));

app.use(function(req,res,next){
    res.status(404);

    res.render('main/404',{url:req.protocol +'://'+req.get('host')+req.url,error:"404 Page Not Found"});
});

app.listen(process.env.PORT || 3000,function(){
    console.log('Server is connected');
});