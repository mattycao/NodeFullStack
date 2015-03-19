/**
 * Created by caoyangkaka on 3/18/15.
 */
var fs = require('fs');
var buf = new Buffer(1024*64*5.5);
buf.fill(1);
fs.writeFile('./msg2.txt',buf);