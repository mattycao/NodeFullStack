var express = require('express');
var router = express.Router();
var Article = require('../model/article');
var settings = require('../settings');

/* GET home page. */
router.get('/', function (req, res, next) {
    if(req.session.user) {
        res.redirect('/article/list/1/' + settings.pageSize);
    } else {
        res.render('index', {
            title: req.session.username || 'Person',
            success: req.flash('success') || '',
            error: req.flash('error') || '',
            username: req.session.username || ''
        });
    }


    //var pageNum = req.params && req.params.pageNum > 0 ? req.params.pageNum : 1;
    //var pageSize = req.params && req.params.pageSize > 0 ? req.params.pageSize : settings.pageSize;
    //Article.pageQuery({}, {
    //    pageNum: pageNum,
    //    pageSize: pageSize
    //}, function (err, count, articles) {
    //    if (err)
    //        next(err);
    //    else {
    //        var totalPage = Math.ceil(count / pageSize);
    //        res.render('index', {
    //            title: req.session.username || 'Person',
    //            success: req.flash('success') || '',
    //            error: req.flash('error') || '',
    //            username: req.session.username || '',
    //            pageNum: pageNum,
    //            pageSize: pageSize,
    //            totalPage: totalPage,
    //            articles: articles
    //        });
    //    }
    //});
});

module.exports = router;
