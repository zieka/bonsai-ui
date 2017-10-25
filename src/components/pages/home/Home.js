import React, { Component } from 'react';
import Banner from '../../organisms/banner/Banner';
import Topic from '../../organisms/topic/Topic';
import GridExample from '../../organisms/grid-example/GridExample';
import ButtonExample from '../../organisms/button-example/ButtonExample';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const fontCss = `<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">`;

class Home extends Component {
  render() {
    return (
        <div>
          <Banner logo="./logo.svg"/>
          <Topic title="Why Bonsai?">
            <p>
              Large component libraries and UI frameworks tend to offer a lot of
              tools to aid in rapid prototyping and then expect developers to cut
              out the excess.  Bonsai's approach is to start on the opposite end
              of the spectrum.
            </p>
            <p>
              Bonsai UI focuses on keeping things <strong>simple</strong> by starting <strong>small</strong>.
            </p>
            <p>
              If building sites with simple, clean, and lightweight interfaces is your goal, Bonsai may be for you.
            </p>
            <div className="row" style={{'margin-top':'2rem'}}>
              <img className="col-3" src="./jquery-free.svg" alt="JQUERY FREE" height="92"></img>
              <img className="col-3" src="./svg-friendly.svg" alt="SVG FRIENDLY" height="92"></img>
              <img className="col-3" src="./pro-sass.svg" alt="PRO SASS" height="92"></img>
              <img className="col-3" src="./sketch-assets.svg" alt="SKETCH ASSETS" height="92"></img>
            </div>


          </Topic>
          <Topic title="The Grid System">
            <GridExample />
          </Topic>
          <Topic title="Typography">
            <p>
              Type is all set with the rems, so font-sizes and spacial relationships
              can be responsively sized based on a single <code>&lt;html&gt;</code> font-size property.
            </p>
            <div style={{'margin-bottom': '3rem'}}>
              <h1>Heading 1 &lt;h1&gt;</h1>
              <h2>Heading 2 &lt;h2&gt;</h2>
              <h3>Heading 3 &lt;h3&gt;</h3>
              <h4>Heading 4 &lt;h4&gt;</h4>
              <h5>Heading 5 &lt;h5&gt;</h5>
              <h6>Heading 6 &lt;h6&gt;</h6>
            </div>
            <p>
              The typography base is Raleway served by Google:
            </p>
            <CodeSnippet code={fontCss} lang="html"/>
          </Topic>
          <Topic title="Buttons">
            <ButtonExample />
          </Topic>
          <Topic title="Inputs">
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Cards"> 
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Loading">
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Toggles">
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Tabs"> 
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Tables"> 
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
          <Topic title="Toasters"> 
            <p>
              Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis amet minim in. Exercitation nostrud occaecat consectetur sit est adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua dolor exercitation nisi amet adipisicing ea reprehenderit culpa aliqua minim ut. Et aliquip veniam pariatur veniam excepteur deserunt duis voluptate. Esse magna laboris ullamco quis incididunt deserunt laboris qui nulla.
            </p>
            <p>
              Voluptate culpa ullamco proident nulla elit aute sit laboris mollit in. Occaecat consequat dolor excepteur velit exercitation deserunt eu id est enim cillum pariatur culpa esse excepteur laborum non. Elit officia consequat ad aliqua velit adipisicing officia nulla.
            </p>
          </Topic>
        </div>
    );
  }
}

export default Home;
