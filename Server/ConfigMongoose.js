const mongoose = require('mongoose');
const conf = {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_ENV || 'local'
};
mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`);

const articleSchema = {
    articleTitle: String, articleContent:String
};
var schema = new mongoose.Schema(articleSchema);
const Article = mongoose.model('articles', schema);

module.exports = { Article };