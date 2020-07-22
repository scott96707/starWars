import React from "react";
import Card from './Card';
import './Cardlist.css';

import alderaan from '../images/alderaan.jpg';

const CardList = ({ planets }) => {
    const cardComponent = planets.map((entry, i) => {
        return (
            <Card
                key={i}
                orbital_period={planets[i].orbital_period}
                name={planets[i].name}
                image={alderaan}
                climate={planets[i].climate}
                rotation_period={planets[i].rotation_period}
                diameter={planets[i].diameter}
            />
        );
    })
    
    return (
        <div className='cardlist--flex'>
            {cardComponent}
        </div>
    )
}

export default CardList;
