/**
 * nextTick setImmediate 相同的地方在于都是在下次事件环执行的执行
 * idle>io>check
 */
//check
var fs = require('fs');


//idle
process.nextTick(function () {
    console.log('nextTick1');

})
//idle
process.nextTick(function () {
    console.log('nextTick2');
    setImmediate(function () {
        console.log('setImmediate2');
    });
    setTimeout(function () {
        console.log('setTimeOut');
    }, 0);
})
setImmediate(function () {
    console.log('setImmediate1');
});
//ideal
process.nextTick(function () {
    console.log('nextTick3');

})



//console.log('hello');
//fs.readFile('./1.global.js',function(data){
//    console.log('file over');
//})