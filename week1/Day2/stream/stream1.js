/**
 * Created by caoyangkaka on 3/18/15.
 */
var fs = require('fs');
var out = fs.createReadStream('./msg.txt',{start:3,end:6});
out.on('open',function(){
    console.log('file opened.');
})
out.pause();
setTimeout(function(){
    out.resume();
},1000);
out.on('data',function(data){
    // note here, although we didn't specify the encoding mode. buffer + string will trigger the buffer.toString() method to transfer the buffer to string.
    console.log('data:' + data);
})
out.on('end',function(){
    console.log('No more Data.');
})

out.on('close',function(){
    console.log('File Closed.');
})

out.on('error',function(err){
    console.error(err);
})