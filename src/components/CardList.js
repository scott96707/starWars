import React from "react";
import Card from './Card';

const CardList = ({ planets }) => {

    return (
        <div className="ma4">
            {planets.map((entry, i) => {
                return (
                    <Card
                        key={i}
                        orbital_period={planets[i].orbital_period}
                        name={planets[i].name}
                        climate={planets[i].climate}
                        rotation_period={planets[i].rotation_period}
                        diameter={planets[i].diameter}
                    />
                );
            })}
        </div>
    );
}

export default CardList;