/**
 * Created by caoyangkaka on 3/19/15.
 */
var net = require('net');
var util = require('util');
var socket = new net.Socket();

socket.setEncoding('utf8');

socket.connect(3001, 'localhost', function() {
    socket.write('Bad');
    setTimeout(function() {
        socket.end('byebye!');
    }, 1000);
});

socket.on('error', function(err) {
    console.log(err);
    socket.destroy();
});

socket.on('end', function() {
    console.log('Client side is closed.');
});

socket.on('data', function(data) {
    console.log('Server:' + data);
});