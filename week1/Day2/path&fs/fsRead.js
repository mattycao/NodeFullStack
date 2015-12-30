/**
 * Created by caoyangkaka on 12/30/15.
 */
var fs = require('fs');
fs.open('./note', 'r', function (err, fd) {
    if (err) {
        console.log('The file cannot be open.');
    }
    var buf = new Buffer(1024);
    var bufOffset = 0;
    var length = buf.length;
    var beginPosition = 10;
    fs.read(fd, buf, bufOffset, length, beginPosition, function (err, byteLength) {
        if (err) {
            console.log('Read process error.');
            return;
        }
        if(buf.length > 0) {
            console.log(buf.toString('utf-8'));
        }
    });
});

