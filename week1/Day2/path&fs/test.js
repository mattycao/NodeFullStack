/**
 * Created by caoyangkaka on 3/19/15.
 */
var os = require('os');
console.log(os.type());
var path = require('path');
console.log(path.join('/foo', '/bar', '/baz/asdf', 'quux', '..'));