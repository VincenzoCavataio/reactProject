import React, { Component } from 'react'
/* import './style.css' */
import TeamSectionS from './TeamSectionS'

export class TeamSection extends Component {
    render() {
        return (
            <TeamSectionS >
                <h1>The Team</h1>
                <div className='teamCards'>
                    {this.props.children}
                </div>
            </TeamSectionS>
        )
    }
}

export default TeamSection
