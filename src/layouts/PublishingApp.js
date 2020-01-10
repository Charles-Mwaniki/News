import '@babel/polyfill';
import React from 'react';
import { connect } from 'react-redux';
import falcorModel from '../FalcorModel';
import { bindActionCreators } from 'redux';
import articleActions from '../actions/Article';

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({ articleActions: bindActionCreators(articleActions, dispatch)});

class PublishingApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            articlesLength:0,
            articles:null
        }
    }
    componentWillMount(){
        this._fetch();
    }
    ///sssdsdsdsdds

    async _fetch(){
            
       const articlesLength = await falcorModel.getValue('articles.length').then((length) => length );
        
        const articles = await falcorModel.get(['articles',{from:0, to: articlesLength-1}, ['id','articleTitle','articleContent']]).then((articleResponse) => articleResponse.json.articles);
        this.props.articleActions.articlesList(articles);
        console.log("articlesLength "+ articlesLength)
    }

    render(){
        let articlesJSX = [];
        for(let articleKey in this.props){
            const articleDetails = this.props[articleKey];
            const currentArticleJSX = (
                <div key={articleKey}>
                    <h2>{articleDetails.articleTitle}</h2>
                    <h3>{articleDetails.articleContent}</h3>
                </div>
            );
            articlesJSX.push(currentArticleJSX);
        }

        //console.log(`Props ${typeof this.state.articles}`);
        return (
            <div>
                <h1>Our Publishing App</h1>
                {articlesJSX}          
            </div>
        
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);