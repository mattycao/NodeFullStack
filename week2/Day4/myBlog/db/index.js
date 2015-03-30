/**
 * Created by caoyangkaka on 3/27/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189:27017/cy');
module.exports = mongoose;