import React from 'react';
import '../Header/Header.css';
import logo from '../img/kids.png'

class Header extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Itunes in React</h1>
                </header>
            </div>
        )
    }
}
export { Header };