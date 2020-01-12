const configMongoose = require('./ConfigMongoose');
const sessionRoutes = require('./RouteSession');
const Article = configMongoose.Article;

const PublishingAppRoutes = [
    ...sessionRoutes,
    {
    route: 'articles.length',
    get: () => { 
        return Article.count({}, (err,count) => count ).then((articlesCountInDB) => {
            return { path: ['articles', 'length'], value: articlesCountInDB}
        })
      
     }
},

{
    route: 'articles[{integers}]["id","articleContent"]',
    get: (pathSet) => {
        const articlesIndex = pathSet[1];
        return Article.find( {}, (err, articleDocs) => articleDocs).then( (articlesArrayFromDB) => {
            let results = [];
            
            articlesIndex.map( (index) => {
                const singleArticleObject = articlesArrayFromDB[index].toObject();
                const falcorSingleArticleResult = {
                    path: ['articles',index],
                    value: singleArticleObject
                };
                results.push(falcorSingleArticleResult);
            });
            return results;
        });
    } 
}

];

module.exports = PublishingAppRoutes;