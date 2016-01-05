/**
 * Created by caoyangkaka on 1/5/16.
 */
// a simple example of echo server
var server = require('net').createServer();

server.on('listening', function() {
    console.log('Server is built.');
});

server.on('connection', function(socket) {
    console.log('A client connection is built.');
    socket.write("Hello! You can start typing. Type 'quit' to exit.\n");
    socket.setEncoding('utf-8');
    socket.on('data', function(data) {
        console.log('Get Info:' + data.toString());
        if(data.trim().toLowerCase() === 'quit') {
            return socket.end('Bye Bye!\n');
        }
        socket.write(data);
    })
    socket.on('end', function() {
        console.log('Client Connection end.');
    });

    socket.on('error', function(error) {
        console.log('Error message:' + error.message);
    });
});

server.listen(3001);