import React, { Component } from 'react'
import ArticleS from './ArticleS';

export class Article extends Component {
    render() {
        
        return (
            <ArticleS >
                <div className="article_img">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="article_info">
                    <h3 className="article_title">{this.props.title}</h3>
                    <p className="article_body">{this.props.body}</p>
                </div>
            </ArticleS>
        )
    }
}

export default Article
