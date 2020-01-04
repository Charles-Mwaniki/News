import falcor from 'falcor';
import FalcorDataSource from 'falcor-http-datasource';
let cache = {
    articles:[
        {
            articleid:'987654',
            articleTitle:'Lorem ipsum - article one',
            articleContent: 'Here goes the content of the article'
        },
        {
            articleid:'123456',
            articleTitle:'Lorem ipsum - article two',
            articleContent: 'Sky is the limit, content goes here'
        }
    ]
};

const model = new falcor.Model({'cache':cache});
export default model;