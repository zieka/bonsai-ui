import React, { Component } from 'react';

function imgSrc(src){
  return src ? 'url(' + src + ') center / cover' : null;
}

class Card extends Component {
  render() {
    return (
      <div className={this.props.shadow ? 'card card--shadow' : 'card'}>
        <div class="card__title" style={{
            "height": this.props.height,
            "background": imgSrc(this.props.imgSrc)
          }}>
           <h2 class="card__title-text">{this.props.title}</h2>
        </div>
        <div className="card__content">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Card;
