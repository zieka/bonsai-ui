import React, { Component } from 'react';
import './GridExample.css';

class GridExample extends Component {
  render() {
    return (
      <div className="grid-example">
        <div className="row">
          <div className="col-1">ONE</div><div className="col-11">ELEVEN</div>
        </div>
        <div className="row">
          <div className="col-2">TWO</div><div className="col-10">TEN</div>
        </div>
        <div className="row">
          <div className="col-3">THREE</div><div className="col-9">NINE</div>
        </div>
        <div className="row">
          <div className="col-4">FOUR</div><div className="col-8">EIGHT</div>
        </div>
        <div className="row">
          <div className="col-5">FIVE</div><div className="col-7">SEVEN</div>
        </div>
        <div className="row">
          <div className="col-6">SIX</div><div className="col-6">SIX</div>
        </div>
        <div className="row">
          <div className="col-7">SEVEN</div><div className="col-5">FIVE</div>
        </div>
        <div className="row">
          <div className="col-8">EIGHT</div><div className="col-4">FOUR</div>
        </div>
        <div className="row">
          <div className="col-9">NINE</div><div className="col-3">THREE</div>
        </div>
        <div className="row">
          <div className="col-10">TEN</div><div className="col-2">TWO</div>
        </div>
        <div className="row">
          <div className="col-11">ELVEN</div><div className="col-1">ONE</div>
        </div>
      </div>
    );
  }
}

export default GridExample;
