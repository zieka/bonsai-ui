import React, { Component } from 'react';

function imgSrc(src) {
  return src ? 'url(' + src + ') center / cover' : null;
}

class Card extends Component {
  render() {
    return (
      <div className={this.props.shadow ? 'card shadow-l' : 'card'}>
        <div
          className="card__title"
          style={{
            height: this.props.height,
            background: imgSrc(this.props.imgSrc)
          }}>
          <div className="card__title-text f2">{this.props.title}</div>
        </div>
        <div className="card__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
