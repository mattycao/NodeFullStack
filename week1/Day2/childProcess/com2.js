/**
 * Created by caoyangkaka on 12/30/15.
 */
// the stdin is closed in default. so
process.stdin.resume();
process.stdin.on('data', function(data) {
    var number;
    try {
        number = parseInt(data.toString(), 10);
        number++;
        process.stdout.write(number + '\n');
    } catch(e) {
        process.stderr.write(err.message + '\n');
    }
})