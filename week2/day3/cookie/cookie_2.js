/**
 * Created by caoyangkaka on 3/25/15.
 */
var http = require('http');
var url = require('url');
var cookieUtils = require('./cookieUtils.js');
http.createServer(function (req, res) {
    var urlobj = url.parse(req.url);
    if ('/favicon.ico' == urlobj.pathname) {
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    } else if ('/write' == urlobj.pathname) {
        res.writeHead(200, {
            'Content-Type': 'text-html;charset=utf-8',
            'Set-Cookie': ['name=' + encodeURIComponent('珠峰') + ';path=/read1', 'age=6;' + 'path=/read2', 'home=beijing; path=/read2']
        });
        res.end('OK');
    } else {
        var cookie = req.headers.cookie;
        res.writeHead(200, {
            'Content-Type': 'text-html;charset=utf-8'
        });
        res.end(JSON.stringify(cookieUtils.parse(cookie)));
    }
}).listen(3001);