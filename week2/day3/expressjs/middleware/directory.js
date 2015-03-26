/**
 * Created by caoyangkaka on 3/26/15.
 */
var express = require('express');
var serveIndex = require('serve-index');
var staticServe = require('serve-static');
var util = require('util');
var app = express();
app.use(serveIndex('./',{}));
app.use(staticServe('./'));
app.listen(3001);