import React, { Component } from 'react';
import './Header.css';

const logo = 'https://placeholdit.co//i/80x80?';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header__header">
          <img src={this.props.logo || logo} className="header__logo" alt="logo" />
          <h1 className="header__title">Welcome to Bonsai UI</h1>
        </header>
      </div>
    );
  }
}

export default Header;
