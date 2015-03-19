/**
 * Created by caoyangkaka on 3/19/15.
 *
 * 系统的行结束符，windows为\r\n，unix和unix-like为\n，mac和ios为\r
 */
var RETURN = 0x0d; //ascii \r 16 d = 13 return
var NEWLINE = 0x0a;// ascii \n
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var path = require('path');

function LineReader(path) {
    this.path = path;
}
util.inherits(LineReader, EventEmitter);

LineReader.prototype.on('newListener', function (name, func) {
    if (name == "newLine") {
        var line = [];
        var self = this;
        fs.open(path.join(__dirname, self.path), 'r', function (err, fd) {
            if (err) throw err;


            //fs.read(fd, buf, offset, buf.length, null, function (err, bytesRead, buff) {
            //    console.log(buff.toString());
            //});

            function readChar(pass) {
                var buf = new Buffer(1);
                var offset = 0;
                fs.read(fd, buf, offset, buf.length, null, function (err, bytesRead) {
                    if (err) throw err;

                    if (bytesRead == 0) {
                        console.log('here');
                        self.emit('newLine', Buffer.concat(line).toString());
                        self.emit('finish');
                        return;
                    }
                    if (pass) {
                        readChar(false);
                    } else if (buf[0] == RETURN || buf[0] == NEWLINE) {
                        self.emit('newLine', Buffer.concat(line).toString());
                        line = [];
                        if (/^win/.test(process.platform && buf[0] == RETURN)) {
                            readChar(true);
                        } else {
                            readChar(false);
                        }
                    } else {
                        line.push(buf);
                        readChar(false);
                    }
                });
            }

            readChar(false);

        });
    }
})

var reader = new LineReader('1.txt');
reader.on('newLine', function (data) {
    console.log(data);
});
reader.on('finish', function () {
    console.log('Finish');
});