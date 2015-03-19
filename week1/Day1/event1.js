/**
 * Created by caoyangkaka on 3/17/15.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Me(name) {
    this.name = name;
}

util.inherits(Me, EventEmitter);
var me = new Me('miao');

me.addListener('boss', function() {
    console.log('Can I help you?');
});

me.emit('boss');

me.on('new', function() {
    console.log('New info.');
});

me.emit('new');


me.once('a', function() {
    console.log('Time');
});


me.emit('a');
me.emit('a');