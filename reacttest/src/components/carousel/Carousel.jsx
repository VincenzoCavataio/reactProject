import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export class Carousel extends Component {  
    constructor(props) {
        super(props)
    
        this.state = {
            current: 0
        }

        this.HandlePrevious = this.HandlePrevious.bind(this);
        this.HandelBefore = this.HandelBefore.bind(this);
    }


    HandlePrevious(){
        this.state.current === (this.props.imgs.length - 1) ? this.setState({current: 0}) : this.setState({current: (this.state.current + 1)});
        console.log();
    }

    HandelBefore(){
        this.state.current === 0 ? this.setState({current: this.props.imgs.length - 1}) : this.setState({current: (this.state.current - 1)});
    }
    

  render() {
    return (
      <div className="Carousel">
        <div className="slideShow">
          <div className="arrow_container">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} onClick={this.HandelBefore}/>
          </div>
          {this.props.imgs.map((element, index) => {
            return (
              <div className={index === this.state.current ? "slide active" : "slide"} key={index}>
                <img src={element.img} alt="" />
                <div className="img_info">
                  <h3 className="slide_title">{element.title}</h3>
                  <p className="slide_description">{element.description}</p>
                  <a>{this.props.link}</a>
                </div>
              </div>
            );
          })}
          <div className="arrow_container">
            <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={this.HandlePrevious}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
