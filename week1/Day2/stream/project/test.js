/**
 * Created by caoyangkaka on 3/19/15.
 */
var fs = require('fs');
var path = require('path');

fs.exists(path.join(__dirname, '1.txt'), function(exist) {
    console.log(exist);
});