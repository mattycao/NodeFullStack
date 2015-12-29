/**
 * Created by caoyangkaka on 3/17/15.
 */
console.log(require.main == module);
console.log(require.main);
console.log('____');
console.log(module);
module.add = function(a, b) {
    return a + b;
}
console.log(module);
console.log(require.main.filename);
//
//Accessing the main module#
//When a file is run directly from Node, require.main is set to its module. That means that you can determine whether a file has been run directly by testing
//
//require.main === module
//For a file foo.js, this will be true if run via node foo.js, but false if run by require('./foo').
//
//    Because module provides a filename property (normally equivalent to __filename), the entry point of the current application can be obtained by checking require.main.filename.
// Note: the module.exports is set to be empty object, so if you want to change the object of the exports, use the module.exports not the exports, will add nothing
// key attribute for module: exports, filename
// this is the COMMONJS protocol