/**
 * Created by caoyangkaka on 3/17/15.
 * A Read-Eval-Print-Loop (REPL) is available both as a standalone program and easily includable
 * in other programs. The REPL provides a way to interactively run JavaScript and see the results.
 *
 *
 */
var repl = require('repl');
//  repl.start(options), note here the option here is necessary
var server = repl.start({});
/**
 * con here is referring to the global, but it cannot be touched in repl.
 * Since it the var con is not exported to the outside, which is the global scope.
 */
var con = server.context;
// here the glo is referring to the global
con.glo = con;
// the name now is the attribute of global
con.name = 'Today';
con.grow = function() {
    console.log(this);
}
title = 'node';
// also type the `.help` for help in the repl


