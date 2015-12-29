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
// 1. for test whether it is a valid encoding argument
console.log(Buffer.isEncoding('utf-8'));
// 2. used for Buffer type test
console.log(Buffer.isBuffer(new Buffer('a')));
// 3. byte length
var str = '中国文字';
console.log('The length of the str:' + str.length + ', the byte length:' + Buffer.byteLength(str, 'utf-8'));
console.log('The length of the str:' + str.length + ', the byte length:' + Buffer.byteLength(str, 'base64'));
// 4. Buffer.concat(list[, length])
// 5. Buffer.compare()