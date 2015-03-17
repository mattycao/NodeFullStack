/**
 * Created by caoyangkaka on 3/17/15.
 */
var repl = require('repl');
var server = repl.start({});
var con = server.context;
con.name = 'Today';
con.grow = function() {
    console.log(Hello);
}
// also click the .help for help in the repl


