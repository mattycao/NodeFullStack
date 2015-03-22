/**
 * Created by caoyangkaka on 3/19/15.
 */
var net = require('net');

var server = net.createServer(function(socket) {
    console.log(server.address());
    server.getConnections(function(err, count) {
        console.log(count + ' has been connected.');
    });
    socket.setEncoding('utf8');
    socket.on('data', function(chunk) {
        console.log(chunk);
        console.log('Already got %d bytes.', socket.bytesRead);
    });
}).listen(3001);

// close the server when all of the connections have been closed
setTimeout(function() {
    server.close();
}, 10000);

server.on('close', function() {
    console.log('The server is closed.');
});