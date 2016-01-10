/**
 * Created by caoyangkaka on 1/10/16.
 */
var fs = require('fs');

// after see the source code, we got a mode option.
// 二爷一直死读书: 2 写 1 执行 4 读
// rwx
// 分三类 自己 所在组 和其他人

fs.writeFile('newFile', 'first line\n', {encoding: 'utf-8', flag: 'w+'}, function(err) {
    if(err) {
        console.log(err.message);
    }
});


fs.writeFile('newFile', 'first line\n', {encoding: 'utf-8', flag: 'a+'}, function(err) {
    if(err) {
        console.log(err.message);
    }
});

fs.appendFile('newFile', 'first line\n');
// 默认utf8
