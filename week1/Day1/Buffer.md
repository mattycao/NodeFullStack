1. Buffer: used for us to manipulate the binary data.
2. Specify in byte(8bits) length
3. random set and get bytes from buffer when it is initialized.
4. **Note**: Buffer is the memory where the data sit its allocated outside of js VM memory heap. So these objects will not move around the garbage collection algorithm.
5. The default encode is utf-8
6. buffer.length is not the same as the Buffer.byteLength(str, encodeMethod)
7. buffer.write('something'[, offset]);
8. buffer.toString('utf-8'[, startIndex, endIndex]);
9. buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
10. buf.fill(value[, offset][, end])
11. buf.slice([start][, end]), although this one will return a new Buffer object, but they all refer to the same reference as the previous one.
12. String.fromCharCode(65, 66, 67), will return a string created by using the specified sequence of Unicode values.
13. If we want to get the correct chinese, we can use the buf.toString('utf-8');
14. 前内存池对于新建的Buffer实例是共享的，内存池的大小为8K
15. String is better than Buffer in speed.
