//import http from 'http';
//import express from 'express';
//import cors from 'cors';
//import bodyparser from 'body-parser';
//import mongoose from 'mongodb://localhost/local';

var http = require('http');
var express = require('express')
var cors = require('cors')
var bodyparser = require('body-parser')
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/local';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const articleSchema = {
    articleTitle: String, articleContent:String
};

const Article = mongoose.model('Article', articleSchema, 'articles')
const app = express();
app.server = http.createServer(app);
app.use(cors());
app.use(bodyparser.json({extended: false}));
app.use(express.static('dist'));
app.get('/', (req,res) => {
Article.find( (err, articleDocs)=>{
    const ourArticles = articleDocs.map((articleItem)=>{
        return `<h2> ${articleItem.articleTitle}</h2> ${articleItem.articleContent}`
    }).join('<br/>');
    res.send(`<h1>Publishing App Initial Application!</h1> ${ourArticles}` )
})
}
);
app.server.listen(process.env.PORT || 3000 );
console.log('Started on port '+ app.server.address().port);
//export default app;