/**
 * Created by caoyangkaka on 4/1/15.
 */
var url = require('url');
/**
 *
 * @param options
 * mustLogin
 * mustNotLogin
 * @returns {Function}
 */
module.exports = function(options) {
    var options = options || {};
    return function(req, res, next) {
        var pathname = url.parse(req.url).pathname;
        if(pathname != '/') {
            if(options.mustLogin && new RegExp(pathname, 'i').test(options.mustLogin)) {
                if(!req.session.username) {
                    req.flash('error', 'Must log in to access this page.');
                    return res.redirect('/users/login');
                }
            }
            if(options.mustNotLogin && new RegExp(pathname, 'i').test(options.mustNotLogin)) {
                console.log(req.session.username + '++++++++');
                if(req.session.username) {
                    req.flash('error', 'Already logged in.');
                    return res.redirect('/');
                }
            }

        }
        next();
    }
}