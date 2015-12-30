/**
 * Created by caoyangkaka on 12/30/15.
 */
var spawn = require('child_process').spawn;
var child = spawn('node',['com2.js']);

// send data to child process
setInterval(function(){
    var random = Math.floor(Math.random() * 1000);
    child.stdin.write(random + '\n');
    child.stdout.once('data', function(data) {
        console.log('Get a new data:' + data + 'with replaced with ' + random);
    })
}, 1000);
child.stderr.on('data', function(data) {
    process.stdout.write(data);
});
