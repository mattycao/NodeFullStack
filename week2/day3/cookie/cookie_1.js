/**
 * Created by caoyangkaka on 3/25/15.
 * 1. What is cookie?
 * 2. How to write and read cookie?
 * 3. the benefit of cookie
 *
 * 1. Cookie: sent from server, to the browser, and it ascii encoded string.
 * 2. in the header, since http is stateless, using the cookie will indicate the cookie
 *
 */
/*
 * How to write cookie:
 * 1. header key:   Set-Cookie: name = afpx; path = /p; domain=.zf.com
 *                              expires = xxxxxx,
 * 2. drawback: cost the bandwidth
 */

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var urlobj = url.parse(req.url);
    if ('/favicon.ico' == urlobj.pathname) {
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    } else if ('/write' == urlobj.pathname) {
        res.writeHead(200, {
            'Content-Type': 'text-html;charset=utf-8',
            'Set-Cookie': 'name=' + encodeURIComponent('珠峰')
        });
        res.end('OK');
    } else {
        var cookie = req.headers.cookie;
        res.writeHead(200, {
            'Content-Type': 'text-html;charset=utf-8'
        });
        res.end(cookie);
    }
}).listen(3001);