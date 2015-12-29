/**
 * Created by caoyangkaka on 3/17/15.
 */

//require('events').EventEmitter;
var util = require('util');
function Event() {
    //prototype  ->>> Object.prototype
}

Event.prototype.addListener = function (type, listener) {
    if (typeof listener !== 'function') {
        throw TypeError('Must be a function');
    }
    if (!this._events) {
        this._events = {};
    }
    //0 null undefind "" []
    if (this._events[type]) {
        this._events[type].push(listener);
    } else {
        this._events[type] = [listener];
    }
}

Event.prototype.emit = function (type) {
    if (!this._events) {
        this._events = {};
    }
    var handler = this._events[type];
    // remove the type argument
    //var arr = new Array(arguments.length - 1);
    //for (var i = 1; i < arguments.length; i++) {
    //    arr[i - 1] = arguments[i];
    //}

    var arr = Array.prototype.slice.apply(arguments);
    arr.shift();
    for (var j = 0; j < handler.length; j++) {
        handler[j].apply(this, arr);
    }
}

function Girl() {
    this.name = 'girl';
    this.goto = function () {
        console.log('aaa');
    }
}

//Girl.prototype = new Event();
//console.log(Girl.prototype.constructor);
util.inherits(Girl, Event);

var min = new Girl();
function Boy() {

}
var jiang = new Boy();
jiang.say = function (thing) {
    console.log('This is ' + thing + '. For you.');
}
min.addListener('seeing', jiang.say);
var zry = new Boy();
zry.say = function () {
    console.log('Take a look!');
}
min.addListener('seeing', zry.say);
min.emit('seeing', 'Iphone6plus');