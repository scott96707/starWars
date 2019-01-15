import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

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
                <h1 className='f1'> Star Tours </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList planets={filteredPlanets} />
            </div>
        )
    }
}

export default App;