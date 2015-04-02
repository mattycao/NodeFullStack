/**
 * Created by caoyangkaka on 4/2/15.
 */
var mongoose = require('../db');
var ObjectId = mongoose.Schema.ObjectId;

var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: {type: ObjectId, ref: 'User'}, // refer to the user
    createTime: Object,
    updateTime: Object
}, {collection: 'article'});
//define a model, use for the operation between the database
var articleModel = mongoose.model('Article', ArticleSchema);

function Article(article) {
    this.title = article.title;
    this.content = article.content;
    this.userId = article.userId;
    this.createTime = article.createTime;
    this.updateTime = article.updateTime;
}

Article.prototype.save = function (callback) {

    var newArticle = new articleModel({
        title: this.title,
        content: this.content,
        userId: this.userId,
        createTime: this.createTime,
        updateTime: this.updateTime
    });

    newArticle.save(function (err, article) {
        if (err)
            callback(err);
        else
            callback(null, article);
    })
}

Article.pageQuery = function (query, pageInfo, callback) {
    articleModel.count(query, function (err, count) {
        var queryCursor = articleModel.find(query).sort({'createTime.minute': -1});
        if (pageInfo && pageInfo.pageNum) {
            queryCursor = queryCursor.skip((pageInfo.pageNum - 1) * pageInfo.pageSize).limit(pageInfo.pageSize);
        }
        queryCursor.populate('userId')
            .exec(function (err, articles) {
                if (err)
                    callback(err);
                else {
                    callback(err, count, articles);
                }
            })
    })
}

module.exports = Article;