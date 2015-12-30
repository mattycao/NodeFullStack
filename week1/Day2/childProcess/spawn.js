/**
 * Created by caoyangkaka on 12/30/15.
 */
var child = require('child_process');
var du = child.spawn('du', ['-sh', '/disk1']);
// listen data from the child process
du.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
du.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
du.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});