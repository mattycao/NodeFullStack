/**
 * Created by caoyangkaka on 5/22/15.
 */
console.log('%s', 'hello');
console.log('%d', 'hello');
console.log('%j', {name: 'hello'});
console.time('a');
var i = 0;
while(i++ < 100000000){}
console.timeEnd('a');
//console.log(global);
//console.dir(global);