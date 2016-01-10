/**
 * Created by caoyangkaka on 1/10/16.
 */
var fs = require('fs');

fs.readFile('note', 'utf-8', function(err, data) {
    console.log(data);
});

