import React from 'react';
import './Header.css';



class Header extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header" >
                    <img src='./kids.png' className="App-logo" alt="logo" />
                    <h1 className="App-title">Itunes in React</h1>
                </header>
            </div>
        )
    }
}
export { Header };