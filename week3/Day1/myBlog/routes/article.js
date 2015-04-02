/**
 * Created by caoyangkaka on 3/27/15.
 */
var express = require('express');
var router = express.Router();
var Article = require('../model/article');
var DateUtil = require('../util/DateUtil');
var settings = require('../settings');
/**
 * post an article
 *
 */
router.get('/add', function (req, res, next) {
    res.render('article/add', {
        title: req.session.username || 'Person',
        cmd: 'add',
        article: {},
        error: req.flash('error') || ''
    });
});

router.get('/list/:pageNum/:pageSize', function (req, res, next) {
    var pageNum = req.params && req.params.pageNum > 0 ? parseInt(req.params.pageNum) : 1;
    var pageSize = req.params && req.params.pageSize > 0 ? parseInt(req.params.pageSize) : settings.pageSize;
    Article.pageQuery({}, {
        pageNum: pageNum,
        pageSize: pageSize
    }, function (err, count, articles) {
        if (err)
            next(err);
        else {
            var totalPage = Math.ceil(count / pageSize);
            res.render('index', {
                title: req.session.username || 'Person',
                pageNum: pageNum,
                pageSize: pageSize,
                totalPage: totalPage,
                articles: articles,
                username: req.session.username || ''
            });
        }
    });
});

router.post('/add', function (req, res, next) {
    var user = req.session.user;
    var ts = DateUtil.getTime();
    var newArticle = new Article({
        userId: user._id,
        title: req.body.title,
        content: req.body.content,
        createTime: ts,
        updateTime: ts
    });
    newArticle.save(function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('back');
        }
        req.flash('success', 'You have successfully post an article.');
        res.redirect('/');
    });
});

module.exports = router;