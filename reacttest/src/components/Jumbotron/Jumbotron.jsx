import React, { Component } from 'react'
/* import './style.css' */
import TiketSearch from '../TiketSearch';
import JumbotronS from './JumbotronS';
import axios from 'axios';

export class Jumbotron extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          from: [],
          to: [],
        };
      }
    
      componentDidMount() {
        if (this.props.isSearch) {
            try {
                axios.get("http://localhost:8000/api/allCity").then((res) => {
                  this.setState({ from: res.data.from, to: res.data.to });
                });
              } catch (error) {
                console.log(error);
              }
        }
      }
    

    render() {
        let action = <a href="http://localhost:3000/travel"><button className={this.props.btnClass}>{this.props.action}</button></a>;
        if (this.props.isSearch) {
            action = <TiketSearch from={this.state.from} to={this.state.to} />
        } 
        return (
            <JumbotronS imgUrl={this.props.imgUrl}>
                <div className='clame'>
                    <h1 className='main_title'>{this.props.title}</h1>
                    <p className='clame_frase'>{this.props.clame}</p>
                    {action}
                </div>
            </JumbotronS>
        )
    }
}

export default Jumbotron
