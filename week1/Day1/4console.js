/**
 * Created by caoyangkaka on 3/17/15.
 */
console.time('100-elements');
for (var i = 0; i < 100000; i++) {
    ;
}
console.timeEnd('100-elements');
var obj = {
    name: 'feng',
    title: 'pro',
    age: 24
}
// will use the util.inspect to get the string
console.log(obj);
console.dir(obj);