/**
 * Created by caoyangkaka on 3/30/15.
 * Add the mongo inside the project
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;


app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//synchronous
var mongoClient = new MongoClient(new Server('localhost', 27017, {'native_parser': true}));

var db = mongoClient.db('course'); // no connect at this point



app.get('/', function (req, res) {
    db.collection('hello_mongo_express').findOne({}, function(err, doc) {
        res.render('hello', doc);
    });
});

app.get('*', function (req, res) {
    res.end('Handle for the stars.');
});

mongoClient.open(function(err, client) {
    if(err) {
        throw err;
    }
    // open the connect and then start listen
    app.listen(3001);
    console.log('The server is started at port number: ' + 3001);
});
