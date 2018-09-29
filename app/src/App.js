import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  componentDidMonth() {

  };

  musicResults = document.getElementById("musicResults");

  getMusic = () => {
    fetch('https://itunes.apple.com/search?term=jack+johnson&limit=6', {
      method: 'GET',
    }).then(r => r.json())
      .then(data => console.log(data.results[0]) || this.setState({
        songs: data.results,
      }))

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.getMusic} >Klik</button>

      </div>

    );
  }
}

export default App;
