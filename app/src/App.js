import React, { Component } from 'react';
import './App.css';
import { List } from './components/List';
import { Header } from './components/Header'


class App extends Component {

  constructor() {
    super();
    this.state = {
      song: [{}],
    };
  }

  // componentDidMonth() {
  // };



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
        <div>
          <Header />
          <List />
        </div>


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
