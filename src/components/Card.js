import React, { Component } from "react";
import yavin from './yavin.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardFront: true,
        };
    };
    
    

    render() {
        
        const handleToggleClick = () => {
            this.setState(prevState => ({
                cardFront: !prevState.cardFront
            }));
        };

        const { name, climate, rotation_period, orbital_period, diameter } = this.props;
        const { cardFront } = this.state;

        const CardSide = () => {
            return (cardFront) ? (
                <div>
                <img alt='robot' src={yavin} width="200" height="200"/>
                    <h2>{name}</h2>
                </div>
            ) : (
                <div>
                    <h2>{name}</h2>
                    <p>Climate: {climate}</p>
                    <p>Day Length: {rotation_period}</p>
                    <p>Year Length: {orbital_period}</p>
                    <p>Planetary Diameter: {diameter}</p>
                </div> 
            )
        };

        return (
            <div onClick={handleToggleClick} className='dib bg-light-blue br3 pa3 ma2 grow bw2 shadow-5' style={{width: 235, height: 303}}>
                <CardSide side={cardFront} />
            </div>
        );
    }
}

export default Card;