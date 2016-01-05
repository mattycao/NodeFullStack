/**
 * Created by caoyangkaka on 1/5/16.
 */
var server = require('net').createServer();
var port = 3001;

server.on('listening', function() {
    console.log('A TCP server is built.');
});

server.on('connection', function(socket) {
    console.log('A new Connection is created.');
    socket.end('Hello');
    server.close();
});

server.on('close', function() {
    console.log('The TCP server connection has been closed.');
});

server.on('error', function(error){
    console.log('Message:' + error.message);
});

server.listen(port);
