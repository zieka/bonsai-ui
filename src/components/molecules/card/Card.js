import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

function imgSrc(src) {
  return src ? 'url(' + src + ') center / cover' : null;
}

class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.classes}`}>
        <LazyLoad height={200}>
          <div
            className="card__title"
            style={{
              height: this.props.height,
              background: imgSrc(this.props.imgSrc)
            }}>
            <div className="card__title-text f2">{this.props.title}</div>
          </div>
        </LazyLoad>
        <div className="card__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
