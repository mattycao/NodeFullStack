var express = require('express');
var router = express.Router();

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
    res.redirect('/');
});

module.exports = router;
