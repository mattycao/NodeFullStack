/**
 * Created by caoyangkaka on 3/17/15.
 */
function test(type) {
    console.log(arguments);
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    arr.shift();
    console.log(arr.toString());
}

test('a', 1, 2, 3);

var a = [1, 2, 3, 4];
console.log(a.concat());