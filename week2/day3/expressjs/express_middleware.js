/**
 * Created by caoyangkaka on 3/26/15.
 * middleware
 * app.use(path, function(req, res, next)
 *
 */
var express = require('express');
var app = express();
var path = require('path');
// if omit the path, then all of the route will go here
app.use(function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    next();
});

app.get('/', function(req, res, next) {
    res.end("中文");
});
app.get('/a', function(req, res, next) {
    res.end("中文");
});

app.listen(3001);
