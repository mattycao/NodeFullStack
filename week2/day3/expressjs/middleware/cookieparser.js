/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var basicAuth = require('basic-auth');
var cookieParser = require('cookie-parser');
var util = require('util');
var app = express();
app.use(cookieParser());
app.get('/',function(req,res){
    console.log(req.headers.cookie);
    console.log(req.cookies);
    res.end('welcome');
})
app.get('/write',function(req,res){

    res.writeHead(200,{'Content-Type':'text/html',
        "Set-Cookie":"name=zf"});
    res.end('welcome, write cookie inside');
})
app.listen(3001);