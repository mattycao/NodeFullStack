/**
 * Created by caoyangkaka on 12/30/15.
 */
var childProcess = require('child_process');
var n = childProcess.fork('./son.js');

n.on('message', function (m) {
    console.log('Main Listen: ', m);
});

n.send({hello: 'son'});