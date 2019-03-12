import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Home />
        </header>
      </div>
    );
  }
}

export default App;
