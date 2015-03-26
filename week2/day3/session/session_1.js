/**
 * Created by caoyangkaka on 3/25/15.
 */
var http = require('http');
var url = require('url');
var session = {};
// key: session id, value: can be an data-storage session object
// every browser/client has a space
http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);

}).listen(3001);