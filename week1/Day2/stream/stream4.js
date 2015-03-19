/**
 * Created by caoyangkaka on 3/18/15.
 * Test for the writeStream
 */
var fs = require('fs');
var src = fs.createReadStream('./msg.txt');
var target = fs.createWriteStream('./msg1.txt');

target.on('open', function() {
    console.log('The write stream has been opened.');
});

src.on('data', function(chunk) {
    target.write(chunk);
});

src.on('end', function() {
    target.end('\r\nThis is the end.');
    target.on('finish', function(){
        console.log('Finish write: %d bytes.', target.bytesWritten);
    })
})

