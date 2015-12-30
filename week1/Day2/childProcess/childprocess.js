/**
 * Created by caoyangkaka on 12/30/15.
 */
var childProcess = require('child_process');
var exec = childProcess.exec;
exec('ls', function(err, stdout, stderr) {
    if(err) {
        console.log('child process exited with error code', err.code);
        return;
    }
    console.log(stdout);
});