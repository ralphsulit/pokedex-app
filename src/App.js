import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokeData: [],
      searchField: '',  
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/') 
      .then(res => {
        console.log(res)
        const data = res.data.results
        this.setState({ pokeData: data })
      })
    }
    
  render() {
    const { pokeData } = this.state;

    const pokemons = pokeData.map((names) => {
      return names.name
    })

    return (
      <div>
        <h1>{pokemons}</h1>
      </div>
    )
  }
}

export default App;
