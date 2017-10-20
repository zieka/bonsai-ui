import React, { Component } from 'react';
import './Header.css';

const logo = 'https://placeholdit.co//i/80x80?';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bonsai UI</h1>
        </header>
        <p className="App-intro">
          Large component libraries and UI frameworks tend to offer more than
          the average consumer uses which can lead to a bunch of overhead and/or
          extra bundle size for one off uses.
        </p>
        <p className="App-intro">
          Bonsai UI focuses on keeping things simple by starting small.
        </p>
      </div>
    );
  }
}

export default Header;
