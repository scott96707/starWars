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

        const handleToggleClick = () => {
            this.setState(prevState => ({
                cardSide: !prevState.cardSide}));
            let el = document.getElementById(name);
            el.classList.toggle("flipper");
        };

        const { name, climate, rotation_period, orbital_period, diameter } = this.props;
        const { cardSide } = this.state;

        const CardSide = () => {
            return (cardSide) ? (
                    <div className="cardFront">
                    <img alt='planet' src={yavin} width="200" height="200"/>
                        <h2>{name}</h2>
                    </div>
            ) : (
                    <div className="cardBack">
                        <h2>{name}</h2>
                        <p>Climate: {climate}</p>
                        <p>Day Length: {rotation_period}</p>
                        <p>Year Length: {orbital_period}</p>
                        <p>Planetary Diameter: {diameter}</p>
                    </div> 
            )
        };

        return (
            <div className="cards" id={name}>
                <div onClick={handleToggleClick}  className='dib bg-light-blue br3 pa3 ma4 bw2 shadow-5' style={{width: 235, height: 303}}>
                    <CardSide side={cardSide} />
                </div>
            </div>
        );
    }
}

export default Card;