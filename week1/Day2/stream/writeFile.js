/**
 * Created by caoyangkaka on 3/18/15.
 */
var fs = require('fs');
var buf = new Buffer(10);
buf.fill(1);
fs.writeFile('./msg2.txt',buf);