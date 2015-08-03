var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view-engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret:'dsalkfjasdflkj2469gdfblknbad43632iadsn87kl',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(express.static(__dirname+'/public'));

app.use(function(req,res,next) {
    res.locals.user = req.session.user || false;

    res.locals.lastPage = req.header('Referrer');
    console.log(res.locals.lastPage)

    res.locals.alerts = req.flash();

    next();
});

app.use('/',require('./controllers/main.js'));

app.use(function(req,res,next){
    res.status(404);

    res.render('main/error',{url:req.protocol +'://'+req.get('host')+req.url,error:"404 Page Not Found"});
});

app.listen(process.env.PORT || 3000,function(){
    console.log('Server is connected');
});