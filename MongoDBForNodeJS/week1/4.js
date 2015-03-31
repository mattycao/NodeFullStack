/**
 * Created by caoyangkaka on 3/30/15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate');



app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('hello', {'name': 'Swig'});
});

app.get('*', function(req, res) {
    res.end('Handle for the stars.');
});

app.listen(3001);
console.log('The server is started at port number' + 3001);