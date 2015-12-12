/**
 * Created by caoyangkaka on 6/17/15.
 */
var b = new Buffer([1, 2, 12]);
console.log(b);
console.dir(b);
console.log(b.toString());
var b2 = new Buffer('你好', 'utf8');
console.log(b2.toString());
var b3 = new Buffer(10);
// random allow the value inside it
console.log(b3);

// notice the Buffer is also an object which has five methods includes. including five methods

