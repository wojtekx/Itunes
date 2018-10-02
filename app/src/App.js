import React, { Component } from 'react';
import logo from './kids.png';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      song: [{}],
    };
  }

  componentDidMonth() {

  };
  submit = () => {
    console.log(this.input.value);
  }

  getMusic = (el) => {
    el.preventDefault();
    fetch(`https://itunes.apple.com/search?term=${this.input.value}&limit=6`, {
      method: 'GET',
    }).then(r => r.json())
      .then(data => console.log(data.results) || this.setState({
        song: data.results,
      }))


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Itunes in React</h1>
        </header>
        <form>
          <input type="text" ref={input => this.input = input} placeholder="Search songs"></input>
          <button onClick={this.getMusic} >Search</button>
        </form>
        <div id="songs">
          {this.state.song.map(el => <div>{el.artistName}</div>)}
          {this.state.song.map(el => <div>{el.trackName}</div>)}
          {this.state.song.map(el => <img src={el.artworkUrl100}></img>)}
        </div>
      </div>

    );
  }
}

export default App;
