/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'favicon.ico')));
// print the error on the web browser and also print the error message on the console


// if throw error, will pass the between middleware, and then find the error handler
// if next("something"), will also pass, the something is treated like a error
// but next(null), will not pass,
app.get('/', function(req, res) {
    res.end('Hello');
});
app.use(function(err, req, res, next) {
    res.send(err.message);
});

app.listen(3001);