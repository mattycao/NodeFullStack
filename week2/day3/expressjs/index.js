/**
 * Created by caoyangkaka on 3/25/15.
 */
var express =require('express');
var app = express();
var path = require('path');
app.get('/', function(req,res) {
    // rewrite the send, which is very powerful
    res.send('hello world!');
});

app.get('/i', function(req,res) {
    // rewrite the send, which is very powerful
    res.send(404);
});

app.get('/a', function(req,res) {
    // rewrite the send, which is very powerful
    res.send({a:'dongodng'});
});

app.get('/b', function(req,res) {
    // rewrite the send, which is very powerful
    res.sendFile(path.join(__dirname, 'package.json'));
});

app.listen(3001);

