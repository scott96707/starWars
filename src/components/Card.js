import React, { Component } from "react";
import yavin from './yavin.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCard: true,
        };
    };
    
    

    render() {
        const flipCard = () => {
            return (this.state.toggleCard) ? 
            (this.setState({toggleCard: false})) : 
            (this.setState({toggleCard: true}));
        };
        const { name, climate, rotation_period, orbital_period, diameter } = this.props;
        
        if(this.state.toggleCard === true) {
            return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' onClick={flipCard} >
            <img alt='robot' src={yavin} width="200" height="200"/>
            <div>
                <h2>{name}</h2>
                <p>{this.state.toggleCard}</p>
            </div>
        </div>
        );
        } else {
            return (
            <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' onClick={flipCard} >
            <div>
                <h2>{name}</h2>
                <p>Climate: {climate}</p>
                <p>Day Length: {rotation_period}</p>
                <p>Year Length: {orbital_period}</p>
                <p>Planetary Diameter: {diameter}</p>
            </div>
            </div>
            );
        }
    }
}


export default Card;