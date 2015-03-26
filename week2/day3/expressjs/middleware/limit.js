var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var rawBoy = require('raw-body');
var methodOverride = require('method-override');
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(function (req, res, next) {
    rawBoy(req, {
        length: req.headers['content-length'],
        limit: '1mb'
    }, function (err, msg) {
        if (err)
            next(err);
        else
            next();
    })
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/upload', function (req, res) {
    res.end('Over');
});
app.use(function (err, req, res, next) {
    res.send(err.message);
});

app.listen(3001);
