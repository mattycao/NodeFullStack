/**
 * Created by caoyangkaka on 12/30/15.
 */
process.on('message', function (m) {
    console.log('Child Listen: ', m);
});

process.send({hello: 'Dad'});