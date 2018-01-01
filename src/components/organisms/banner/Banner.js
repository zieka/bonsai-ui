import React, { Component } from 'react';
import './Banner.css';

const logo = 'https://placeholdit.co//i/80x80?';

function imgSrc(src) {
  return src ? 'url(' + src + ') center / cover' : null;
}

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <header className="banner__header"
          style={{
            background: imgSrc(this.props.bannerBg)
          }}>
        <h1 className="banner__title">Welcome to Bonsai UI</h1>
          <img
            src={this.props.logo || logo}
            className="banner__logo"
            alt="logo"
          />
        </header>
      </div>
    );
  }
}

export default Banner;
