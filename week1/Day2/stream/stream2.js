/**
 * Created by caoyangkaka on 3/18/15.
 * Create the readable in a pause mode
 */

var fs = require('fs');

var readable = fs.createReadStream('./msg.txt');

readable.setEncoding('utf8');
readable.on('readable', function() {
    var chunk;
    // return null if data is empty
    // here, will cause the buffer integration problem
    while(null != (chunk = readable.read(10))) {
        console.log('Data' + chunk);
        console.log('#######');
    }
});

readable.on('end', function() {
    console.log('No more data.');
});

readable.on('close', function() {
    console.log('The file has been closed.');
});


