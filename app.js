const http =require('http');
const express =require('express');

const app = express();
const path=require("path");
var bodyparser=require("body-parser");
var flash = require("express-flash");

var session = require('express-session');
var flash = require('req-flash');

var ejsleyout=require('express-ejs-layouts');
var db=require("./app_server/models/db");
var cookieParser = require('cookie-parser');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./app_server/Views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(ejsleyout);

var callmanagerouter =require('./app_server/routes/ManageRouter');
callmanagerouter(app);

app.use(bodyparser.json());

app.listen(8000);