var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../model/user');

/* GET users listing. */
router.get('/reg', function (req, res, next) {
    res.render('user/reg', {
        title: 'Person',
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
    User.get(username, function (err, user) {
        if (err) {
            req.flash('error', 'Cannot search UserName from the database. Please contact website Builder.');
            return res.redirect('back');
        } else {
            if (user) {
                req.flash('error', 'The UserName you entered already exists! Please change to another one.');
                return res.redirect('back');
            } else {
                newUser.save(function (err, user) {
                    if (err) {
                        req.flash('error', 'Registration fails! Connect the Builder.');
                        return res.redirect('back');
                    } else {
                        req.session.user = user;
                        req.session.username = user.username;
                        req.flash('success', user.username + ' registered in successfully!');
                        res.redirect('/');
                    }

                });
            }

        }
    });


});

router.get('/login', function (req, res, next) {
    res.render('user/login', {
        title: 'Person',
        error: req.flash('error') || ''
    });
});

router.get('/logout', function (req, res, next) {
    var success =  req.session.username + ' already logged out successfully.';
    req.session.username = null;
    req.session.user = null;
    res.render('index', {
        title: 'Person',
        success: success,
        error: '',
        username: ''
    });
});

router.post('/login', function (req, res, next) {
    var password = crypto.createHash('md5').update(req.body.password).digest('hex');
    User.get(req.body.username, function (err, user) {
        if (err) {
            req.flash('error', 'Cannot search UserName from the database. Please contact website Builder.');
            return res.redirect('back');
        } else {
            if (user) {
                if (user.password != password) {
                    req.flash('error', 'The password is not right. Please try again.');
                    return res.redirect('back');
                } else {
                    req.session.user = user;
                    req.session.username = user.username;
                    req.flash('success', user.username + ' has logged in successfully!');
                    res.redirect('/');
                }
            } else {
                req.flash('error', 'UserName doesn\'t exist. Please try again!');
                res.redirect('back');
            }

        }
    });
});

module.exports = router;
