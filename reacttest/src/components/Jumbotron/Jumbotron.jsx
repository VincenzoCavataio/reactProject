import React, { Component } from 'react'
/* import './style.css' */
import JumbotronS from './JumbotronS';

export class Jumbotron extends Component {

    /* divStyle = {
        backgroundImage: 'url(' + this.props.imgUrl + ')'
      }; */

    render() {
        return (
            <JumbotronS imgUrl={this.props.imgUrl}>
                <div className='clame'>
                    <h1 className='main_title'>{this.props.title}</h1>
                    <p className='clame_frase'>{this.props.clame}</p>
                    <a href="http://localhost:3000/travel"><button className={this.props.btnClass}>{this.props.action}</button></a>
                </div>
            </JumbotronS>
        )
    }
}

export default Jumbotron
