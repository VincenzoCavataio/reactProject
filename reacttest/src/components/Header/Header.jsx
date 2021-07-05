import React, { Component } from 'react'
import './style.css'

import NavMenu from '../NavMenu'

export class Header extends Component {
    render() {
        return (
            <header>
                <NavMenu logo={this.props.logo} imgName={this.props.imgName} links={this.props.links}/>
            </header>
        )
    }
}

export default Header
