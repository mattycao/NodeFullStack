/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var util = require('util');
var fs = require('fs');
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('.html', require('ejs').__express);
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded());
app.use(multer({dest:'./'}));
// if omit the path, then all of the route will go here
app.get('/', function(req, res) {
    // res.writeHeader = res.writeHead
    // res.setHeader only the head value, but the previous two will set then send the head
    res.render('index');
});

app.post('/upload', function(req, res) {
    console.log(util.inspect(req.body));
    console.log(util.inspect(req.files));
    fs.createReadStream(req.files.avatar.path).pipe(res);
});

app.listen(3001);