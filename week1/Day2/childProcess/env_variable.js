/**
 * Created by caoyangkaka on 12/30/15.
 */
var cp = require('child_process');
var exec = cp.exec;

exec('node child.js', {env: {number: 123}}, function(err, stdout) {
    if(err) {
        console.log(err.stack);
        console.log(err.message);
    }
    console.log(stdout);
})
