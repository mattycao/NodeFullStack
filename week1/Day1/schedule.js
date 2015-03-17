/**
 * Created by caoyangkaka on 3/17/15.
 */
console.log("1");

process.nextTick(function(){
    console.log('tick1');
});
// note here the setTimout is before the setImmediate
setTimeout(function() {console.log('Timer1');}, 0);

process.nextTick(function(){
    console.log('tick2');
    //If you queue an immediate from inside an executing callback, that immediate won't fire until the next event loop iteration
    setImmediate(function(){
        console.log('setImmediate1');
    });
});
process.nextTick(function(){
    console.log('tick3');
});

setImmediate(function(){
    console.log('setImmediate2');
});

console.log("2");

