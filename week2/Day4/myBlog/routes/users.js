var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../model/user');

/* GET users listing. */
router.get('/reg', function (req, res, next) {
    res.render('user/reg', {
        title: 'Hello Guest',
        error: req.flash('error') || ''
    });
});

router.post('/reg', function (req, res, next) {
    // post the data to the database and do some verification
    var username = req.body.username, email = req.body.email, password = req.body.password, password_repeat = req.body['repassword'];
    if (!username) {
        req.flash('error', 'Your UserName cannot be empty! Please enter your UserName!');
        return res.redirect('back');
    }
    if (!password || (password != password_repeat)) {
        req.flash('error', 'Your password cannot be empty or passwords are not the same');
        return res.redirect('back');
    }
    var md5 = crypto.createHash('md5');
    password = md5.update(password).digest('hex');
    var newUser = new User({
        username: username,
        password: password,
        email: email
    });
    newUser.save(function (err, user) {
        if (err) {
            req.flash('error', 'Registration fails! Connect the Builder.');
            return res.redirect('back');
        } else {
            req.session.user = user;
            req.flash('success', 'Registration Success!');
            res.redirect('/');
        }

    });

});

module.exports = router;
