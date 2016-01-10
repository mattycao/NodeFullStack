/**
 * Created by caoyangkaka on 1/10/16.
 */
// base64: 3个8字节 转成4个6字节 然后6位字节前面加两个0, 转化成可见字符串, 这样子容易识别和传播
// handle the base64 using the nodejs
function encodeInBase64(str) {
    if (typeof str !== 'string') {
        return TypeError('Wrong Data Type');
    }
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    code += code.toLowerCase();
    code += '0123456789';
    code += '+/';
    var bf = new Buffer(str, 'utf8');
    var temp = [];
    for (var i = 0; i < bf.length; i++) {
        temp[i] = bf[i].toString(2);

    }
    var total = temp.join('');
    total = total.replace(/[01]{6}/g, function (result) {
        return code[parseInt('00' + result, 2)];
    });
    return total;
}
// for test
console.log(encodeInBase64('珠'));
exports.encodeInBase64 = encodeInBase64;