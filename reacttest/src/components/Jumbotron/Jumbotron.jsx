import React, { Component } from 'react'
import './style.css'

export class Jumbotron extends Component {

    divStyle = {
        backgroundImage: 'url(' + this.props.imgUrl + ')'
      };

    render() {
        return (
            <div className='jumbotron' style={this.divStyle}>
                <div className='clame'>
                    <h1 className='main_title'>{this.props.title}</h1>
                    <p className='clame_frase'>{this.props.clame}</p>
                    <button className={this.props.btnClass}>{this.props.action}</button>
                </div>
            </div>
        )
    }
}

export default Jumbotron
