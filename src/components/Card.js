import React, { Component } from "react";
import yavin from './yavin.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCard: true,
        };
    };
    
    flipCard = () => {
        (this.state.toggleCard) ? (this.setState({toggleCard: false})) : (this.setState({toggleCard: true}))
    };

    render() {
        if(this.state.toggleCard === true) {
            return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' onClick={this.flipCard} >
            <img alt='robot' src={yavin} width="200" height="200"/>
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.state.toggleCard}</p>
            </div>
        </div>
        );
        } else {
            return (
            <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' onClick={this.flipCard} >
            <div>
                <h2>{this.props.name}</h2>
                <p>Climate: {this.props.climate}</p>
                <p>Day Length: {this.props.rotation_period}</p>
                <p>Year Length: {this.props.orbital_period}</p>
                <p>Planetary Diameter: {this.props.diameter}</p>
            </div>
            </div>
            );
        }
    }
}


export default Card;