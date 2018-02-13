import React, { Component } from 'react';
import './GridExample.css';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `
<!-- columns should be wrapped in a div with the class "row" -->
<div class="row">

  <!-- columns use the class "col-#" where # is the number of columns wide (1-12) -->
  <div class="f7 tc col-1">
    col-1
  </div>
  <div class="f7 tc col-11">
    col-11
  </div>

</div>

`;

const codeExample2 = `
<div class="row">
  <div class="f7 tc col-6">col-6</div>
  <div class="f7 tc col-6">col-6</div>
</div>
<div class="row">
  <div class="f7 tc col-6 sm-3">col-6 sm-3</div>
  <div class="f7 tc col-6 sm-3">col-6 sm-3</div>
  <div class="f7 tc col-6 sm-3">col-6 sm-3</div>
  <div class="f7 tc col-6 sm-3">col-6 sm-3</div>
</div>
<div class="row">
  <div class="f7 tc col-12 lg-3">col-12 lg-3</div>
  <div class="f7 tc col-12 lg-6">col-12 lg-6</div>
  <div class="f7 tc col-12 lg-3">col-12 lg-3</div>
</div>

`;

class GridExample extends Component {
  render() {
    return (
      <div>
        <p>
          The grid is a 12-column fluid grid similar to the one found in
          bootstrap.
        </p>
        <p>
          The base class{' '}
          <code style={{ whiteSpace: 'nowrap' }}>
            col-<i>#</i>
          </code>{' '}
          should be used to layout your site at the smallest of supported mobile
          resolutions. The # in the class name is a number between 1 and 12
          which represents the column width.
        </p>
        <div className="grid-example">
          <div className="row">
            <div className="f7 tc col-1">col-1</div>
            <div className="f7 tc col-11">col-11</div>
          </div>
          <div className="row">
            <div className="f7 tc col-2">col-2</div>
            <div className="f7 tc col-10">col-10</div>
          </div>
          <div className="row">
            <div className="f7 tc col-3">col-3</div>
            <div className="f7 tc col-9">col-9</div>
          </div>
          <div className="row">
            <div className="f7 tc col-4">col-4</div>
            <div className="f7 tc col-8">col-8</div>
          </div>
          <div className="row">
            <div className="f7 tc col-5">col-5</div>
            <div className="f7 tc col-7">col-7</div>
          </div>
          <div className="row">
            <div className="f7 tc col-6">col-6</div>
            <div className="f7 tc col-6">col-6</div>
          </div>
          <div className="row">
            <div className="f7 tc col-7">col-7</div>
            <div className="f7 tc col-5">col-5</div>
          </div>
          <div className="row">
            <div className="f7 tc col-8">col-8</div>
            <div className="f7 tc col-4">col-4</div>
          </div>
          <div className="row">
            <div className="f7 tc col-9">col-9</div>
            <div className="f7 tc col-3">col-3</div>
          </div>
          <div className="row">
            <div className="f7 tc col-10">col-10</div>
            <div className="f7 tc col-2">col-2</div>
          </div>
          <div className="row">
            <div className="f7 tc col-11">col-11</div>
            <div className="f7 tc col-1">col-1</div>
          </div>
        </div>
        <CodeSnippet code={codeExample} lang="html" />
        <p>
          If you want the layout to change as you design for larger resolutions
          you can provide supplementary classes{' '}
          <code style={{ whiteSpace: 'nowrap' }}>
            <i>breakpoint</i>-<i>#</i>
          </code>.
        </p>
        <p>Resize the browser and have a look:</p>
        <div className="grid-example">
          <div className="row">
            <div className="f7 tc col-6">col-6</div>
            <div className="f7 tc col-6">col-6</div>
          </div>
          <div className="row">
            <div className="f7 tc col-6 sm-3">col-6 sm-3</div>
            <div className="f7 tc col-6 sm-3">col-6 sm-3</div>
            <div className="f7 tc col-6 sm-3">col-6 sm-3</div>
            <div className="f7 tc col-6 sm-3">col-6 sm-3</div>
          </div>
          <div className="row">
            <div className="f7 tc col-12 lg-3">col-12 lg-3</div>
            <div className="f7 tc col-12 lg-6">col-12 lg-6</div>
            <div className="f7 tc col-12 lg-3">col-12 lg-3</div>
          </div>
        </div>
        <CodeSnippet code={codeExample2} lang="html" />
      </div>
    );
  }
}

export default GridExample;
