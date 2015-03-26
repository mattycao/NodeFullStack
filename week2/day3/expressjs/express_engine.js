/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('.html', require('ejs').__express);
app.use(express.static(__dirname));
// if omit the path, then all of the route will go here
app.get(function(req, res) {
    // res.writeHeader = res.writeHead
    // res.setHeader only the head value, but the previous two will set then send the head
    res.render('index', {name:"The one, since I am a singer."});
});

app.listen(3001);