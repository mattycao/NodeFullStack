/**
 * Created by caoyangkaka on 3/26/15.
 */
/**
 * Created by caoyangkaka on 3/26/15.
 * middleware
 * app.use(path, function(req, res, next)
 *
 */
var express = require('express');
var app = express();
var path = require('path');
app.use('/coffee/:person', function (req, res, next) {
    // rewrite the send, which is very powerful
    res.coffee = 'add water,';
    next();
});

app.use('/coffee/:person', function (req, res, next) {
    // rewrite the send, which is very powerful
    res.coffee += 'add coffee,';
    next();
});

app.use('/coffee/:person', function (req, res, next) {
    // rewrite the send, which is very powerful
    res.coffee += 'add suger,';
    if(req.param.person == 'black') {
        res.coffee += 'add more suger, '
    }
    next();
});

app.get('/coffee/:person', function (req, res, next) {
    // rewrite the send, which is very powerful
    res.end(res.coffee);
});




app.listen(3001);