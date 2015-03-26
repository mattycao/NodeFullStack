/**
 * Created by caoyangkaka on 3/25/15.
 */
function parse(str) {
    var cookieObj = {};
    if(str) {
        var vals = str.split('; '); // notice here the space here
        for(var i = 0; i < vals.length; i++) {
            var kv = vals[i].split('=');
            cookieObj[kv[0]] = decodeURIComponent(kv[1]);
        }
    }
    return cookieObj;
}
/**
 * change the object to the cookie string
 * @param cookieObj
 * @param options
 */
function toArray(cookieObj, options) {
    var cookieArray = []; // set-cookie array
    if(cookieObj) {
        for(var name in cookieObj) {
            var cookieStr = name + '=' + encodeURIComponent(cookieObj[name]);
            if(options) {
                if(options.path) {
                    cookieStr += ';path=' + option.path;
                }
                if(options.maxAge) {
                    var maxAge = parseInt(option.maxAge);
                    if(isNaN(maxAge)) {
                        throw new Error('maxAge must be a number');
                    } else {
                        cookieStr += ';max-age=' + maxAge;
                    }

                }
                if(options.domain) {
                    cookieStr += ';domain=' + options.domain;
                }
                if(options.expires) {
                    if(options.expires instanceof Date) {
                        cookieStr += ';expires=' + options.expires;
                    } else {
                        throw new Error('Expires must be an Date type.');
                    }
                }
                if(options.httpOnly) {
                    cookieStr += ';httpOnly';
                }

            }
            cookieArray.push(cookieStr);
        }
    }
    return cookieArray;
}
module.exports.parse = parse;
module.exports.toArray = toArray;