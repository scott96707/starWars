import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions ={
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 0
        },
        "size": {
            "value": 1.75
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        },
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            searchfield: '',
        };
    }

    async componentDidMount() {
            const resp = await fetch("https://swapi.co/api/planets/");
            const data = await resp.json();
            this.setState({ planets: data.results });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
        
    render() {
        const { planets, searchfield } = this.state;
        const filteredPlanets = planets.filter(planet => {
            return planet.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !planets.length ? <h1>Loading Planets</h1> :
            (
                <div className="tc">
                <Particles className="particles" params={particlesOptions} />
                    <h1 className='f1'> Star Tours </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="button">Planets!</button>
                        <button type="button">People!</button>
                    </div>
                    <CardList planets={filteredPlanets} />
                </div>
            )
    }
}

export default App;