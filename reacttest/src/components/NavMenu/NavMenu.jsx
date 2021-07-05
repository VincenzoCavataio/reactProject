import React, { Component } from 'react'
import './style.css'

export class NavMenu extends Component {
    render() {
        return (
            <>
                <div className="logo">
                    <img src={this.props.logo} alt={this.props.imgName} />
                </div>
                <nav>
                    <ul className='link_list'>
                        {
                            this.props.links.map((element, index) => {
                               return <li key={index}>{element}</li>
                            })
                        }
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavMenu
