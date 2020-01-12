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
var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var falcorRouter = require('falcor-router');
var routes = require('./Routes');
const configMongoose = require('./ConfigMongoose');
const Article = configMongoose.Article;
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.server = http.createServer(app);
app.use(cors());
app.use(bodyparser.json({extended: false}));
app.use(bodyparser.urlencoded({extended:false}));

app.use('/model.json',falcorExpress.dataSourceRoute( (req, res) => { return new falcorRouter(routes);}))

app.use(express.static('dist'));
app.get('/', (req,res) => {
Article.find( (err, articleDocs)=>{
    const ourArticles = articleDocs.map((articleItem)=>{
        return `<h2> ${articleItem.articleTitle}</h2> ${articleItem.articleContent}`
    }).join('<br/>');
    res.send(`<h1>Publishing App Initial Application!</h1> ${ourArticles}` )
    console.log("ourArticles ",ourArticles)
})
}
);
app.server.listen(process.env.PORT || 3000 );
console.log('Started on port '+ app.server.address().port);
//export default app;