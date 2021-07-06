import React, { Component } from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export class Carousel extends Component {
    render() {
        return (
            <div className='Carousel'>
                <div className="slideShow">
                    <div className="arrow_container">
                        <FontAwesomeIcon className='arrow' icon={faChevronLeft} />
                    </div>
                    <div className="slide">
                        <img src={this.props.img} alt="" />
                        <div className="img_info">
                            <h3 className='slide_title'>{this.props.title}</h3>
                            <p className='slide_description'>{this.props.description}</p>
                            <a>{this.props.link}</a>
                        </div>
                    </div>
                    <div className="arrow_container">
                        <FontAwesomeIcon className='arrow' icon={faChevronRight} />    
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
