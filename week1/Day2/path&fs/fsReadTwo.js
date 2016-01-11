/**
 * Created by caoyangkaka on 1/11/16.
 */
var fs = require('fs');
fs.open('newFile', 'r', function(err, fd) {
    var list = [];
    var pos = 0;
    (function read() {
        var buffer = new Buffer(3);
        fs.read(fd, buffer, 0, 3, null, function(err, byteLength) {
            if(byteLength !== 0) {
                pos += byteLength;
                list.push(buffer);
                read();
            } else {
                console.log(Buffer.concat(list).slice(0, pos).toString());
                fs.close(fd);
            }
        });
    })();
});
