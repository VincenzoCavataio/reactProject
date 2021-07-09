import React, { Component } from 'react'
import './style.css'
import axios from 'axios';

export class PageOne extends Component {
    //magie con stati 
    render() {
        let title;
        if (this.props.pageTitle) {
            title = <h1 className='page_title'>{this.props.pageTitle}</h1>
        }
        return (
            <>
                {title}
                <div>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default PageOne
