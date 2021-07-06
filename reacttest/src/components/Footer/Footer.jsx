import React, { Component } from 'react'
import NavMenu from '../NavMenu'
import FooterS from './styled'
import './style.css'

export class Footer extends Component {
    render() {
        return (
            <FooterS>
                <NavMenu logo={this.props.logo} imgName={this.props.imgName} links={this.props.links}/>
            </FooterS>
        )
    }
}

export default Footer
