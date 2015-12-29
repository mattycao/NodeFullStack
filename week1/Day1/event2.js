/**
 * Created by caoyangkaka on 6/15/15.
 */
// using the event
var util = require('util');
var emitter = require('events').EventEmitter;

//using the setInterval to trigger the event
var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
    }, 1000);
};

util.inherits(Ticker, emitter);

// the client
var ex = new Ticker;
ex.on('tick', function() {
    console.log('Tick');
    console.log('Tick');
});