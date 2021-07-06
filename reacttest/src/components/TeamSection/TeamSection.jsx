import React, { Component } from 'react'
import './style.css'

export class TeamSection extends Component {
    render() {
        return (
            <div className='team'>
                <h1>The Team</h1>
                <div className='teamCards'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TeamSection
