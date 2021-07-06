import React, { Component } from 'react'
import './style.css'

export class InfoCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            infos: [
                {
                  grafic: '',
                  title: 'Luoghi',
                  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
                },
                {
                  grafic: '',
                  title: 'Amici',
                  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
                },
                {
                  grafic: '',
                  title: 'Sogni',
                  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et'
                }
              ]
        }
    }
    
    render() {
        return (
            <div className='card_container'>
                {
                    this.state.infos.map(element => {
                        return (
                            <div className={'card' + this.props.cardClass} key={element.title}>
                                <div>
                                    {element.grafic}
                                </div>
                                <h3>{element.title}</h3>
                                <p>{element.body}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default InfoCard
