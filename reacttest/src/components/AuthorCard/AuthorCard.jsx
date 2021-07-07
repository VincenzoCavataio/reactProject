import React, { Component } from 'react'
/* import './style.css' */
import AuthorCardS from './AuthorCardS';

export class AuthorCard extends Component {
    render() {
        return (
            <AuthorCardS >
                <div className="avatar"> 
                    <img src={this.props.img} alt="" />
                </div>
                <div>
                    <h4>{this.props.authorName}</h4>
                    <p><small>{this.props.authorRole}</small></p>
                    <p><small>{this.props.bio}</small></p>
                </div>
            </AuthorCardS>
        )
    }
}

export default AuthorCard
