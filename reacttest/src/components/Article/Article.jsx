import React, { Component } from 'react'
import './style.css'

export class Article extends Component {
    render() {
        
        return (
            <div className={"article" + ' ' + (this.props.reverse ? 'reverse' : '')}>
                <div className="article_img">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="article_info">
                    <h3 className="article_title">{this.props.title}</h3>
                    <p className="article_body">{this.props.body}</p>
                </div>
            </div>
        )
    }
}

export default Article
