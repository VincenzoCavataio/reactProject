import React, { Component } from 'react'
import './style.css'

export class PageOne extends Component {
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
