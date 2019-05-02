import React, { Component } from "react";
import yavin from './yavin.jpg';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardSide: true,
        };
    };
    
    render() {
        const { name, climate, rotation_period, orbital_period, diameter } = this.props;

        return (
            <div className="flip-card" id={name}>
                <div className='flip-card-inner dib bg-light-blue br3 pa3 ma4 shadow-6' style={{width: 235, height: 303}}>
                    <div className="flip-card-front br3">
                        <img alt='planet' src={yavin} width="200" height="200"/>
                            <h2>{name}</h2>
                    </div>
                    <div className="flip-card-back br3">
                        <h2>{name}</h2>
                        <p>Climate: {climate}</p>
                        <p>Day Length: {rotation_period}</p>
                        <p>Year Length: {orbital_period}</p>
                        <p>Planetary Diameter: {diameter}</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Card;