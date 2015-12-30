/**
 * Created by caoyangkaka on 12/30/15.
 */
var spawn = require('child_process').spawn;
// Spawn the child with a "ls does_not_exist.txt" command
var child = spawn('ls');
// When the child process exits:
child.on('exit', function (code) {
    console.log('child process terminated with code ' + code);
});