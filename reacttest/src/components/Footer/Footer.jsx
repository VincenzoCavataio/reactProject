import React, { Component } from 'react'
import NavMenu from '../NavMenu'
import './style.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <NavMenu logo={this.props.logo} imgName={this.props.imgName} links={this.props.links}/>
            </footer>
        )
    }
}

export default Footer
