/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var basicAuth = require('basic-auth');
var util = require('util');
var app = express();
app.use(function (req, res, next) {
    var credentials = basicAuth(req)

    if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
        res.writeHead(401, {
            'WWW-Authenticate': 'Basic realm="Authenticate required."'
        })
        res.end();
    } else {
        res.end('Access granted');
    }
});
app.get('/', function (req, res) {
    res.end('welcome');
});

app.listen(3001);