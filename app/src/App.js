import React, { Component } from 'react';
import logo from './kids.png';
import './App.css';
import { Comp1 } from './components/comp1';


class App extends Component {

  constructor() {
    super();
    this.state = {
      song: [{}],
    };
  }

  // componentDidMonth() {
  // };

  submit = () => {
    console.log(this.input.value);
  };

  getMusic = (el) => {
    el.preventDefault();
    fetch(`https://itunes.apple.com/search?term=${this.input.value}&limit=6`, {
      method: 'GET',
    }).then(r => r.json())
      .then(data => console.log(data.results) || this.setState({
        song: data.results,
      }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Itunes in React</h1>
          <Comp1 />
        </header>
        <form>
          <input type="text" ref={input => this.input = input} placeholder="Search songs"></input>
          <button onClick={this.getMusic} >Search</button>
        </form>
        <div id="songs">
          {this.state.song.map(el => <div><img src={el.artworkUrl100} />{el.artistName}{el.trackName}</div>)}
        </div>
      </div>

    );
  }
}

export default App;
