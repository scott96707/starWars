import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            planets = [],
            searchfield = '',
        }
    };

    render() {
        const { planets, searchfield } = this.state;
        const filteredPlanets = planets.filter(planet => {
            return planet.name
        })
    }


}

export default App;