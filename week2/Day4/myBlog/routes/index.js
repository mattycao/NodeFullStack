var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: req.session.username || 'Person',
        success: req.flash('success') || '',
        username: req.session.username || ''
    });
});

module.exports = router;
