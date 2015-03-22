/**
 * Created by caoyangkaka on 3/19/15.
 */
var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./mt.txt');

var server = net.createServer({allowHalfOpen: true}, function( socket) {
    socket.setEncoding('utf8');
    var rs = fs.createReadStream('./mgs.txt');
    rs.on('data', function(data){
        var flag = socket.write(data);
        //console.log(flag);
        //console.log('Socket Buffer has: %d', socket.bufferSize);
    });
    var s = '';
    socket.on('data',function(data){
        s = data + ' too.';
        console.log('Client said: ' + data);
    })
    setInterval(function(){
        socket.write(s);
    },1000)
}).listen(3001);