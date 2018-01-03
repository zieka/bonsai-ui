import React, { Component } from 'react';
import Banner from '../../organisms/banner/Banner';
import Topic from '../../organisms/topic/Topic';
import GridExample from '../../organisms/grid-example/GridExample';
import ButtonExample from '../../organisms/button-example/ButtonExample';
import InputExample from '../../organisms/input-example/InputExample';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';
import Card from '../../molecules/card/Card';

const fontCss = `<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">`;

const spacingStyle = {
  'boxSizing': 'border-box',
  'border': '1px solid #fff',
  'marginBottom': '.66rem',
  'fontSize': '.75rem',
  'marginLeft': 'auto',
  'marginRight': 'auto'
};

class Home extends Component {
  render() {
    return (
      <div>
        <Banner logo="./logo.svg" bannerBg="./hb.jpg" />
        <Topic title="Why Bonsai?">
          <p>
            Large css libraries, frameworks, and toolkits tend to offer a lot of
            tools to aid in rapid prototyping and then expect developers to cut
            out the excess. Bonsai's approach is to start on the opposite end of
            the spectrum.
          </p>
          <p>
            Bonsai UI focuses on keeping things <strong>simple</strong> by
            starting <strong>small</strong> and staying <strong>small</strong>.
          </p>
          <p>
            If building sites with simple, clean, and lightweight interfaces is
            your goal, Bonsai may be for you.
          </p>
          <div className="row" style={{ 'marginTop': '2rem' }}>
            <img
              className="col-3"
              src="./jquery-free.svg"
              alt="JQUERY FREE"
              height="92"
            />
            <img
              className="col-3"
              src="./svg-friendly.svg"
              alt="SVG FRIENDLY"
              height="92"
            />
            <img
              className="col-3"
              src="./pro-sass.svg"
              alt="PRO SASS"
              height="92"
            />
            <img
              className="col-3"
              src="./sketch-assets.svg"
              alt="SKETCH ASSETS"
              height="92"
            />
          </div>
        </Topic>
        <Topic title="The Grid System">
          <GridExample />
        </Topic>
        <Topic title="Typography">
          <p>
            Type is all set with the rems, so font-sizes and spacial
            relationships can be responsively sized based on a single{' '}
            <code>&lt;html&gt;</code> font-size property.
          </p>
          <p>Font sizing uses the following h# classes:</p>
          <div style={{ 'marginBottom': '3rem' }}>
            <h1 className="h1">&lt;h1 class="h1"&gt;</h1>
            <h2 className="h2">&lt;h2 class="h2"&gt;</h2>
            <h3 className="h3">&lt;h3 class="h3"&gt;</h3>
            <h4 className="h4">&lt;h4 class="h4"&gt;</h4>
            <h5 className="h5">&lt;h5 class="h5"&gt;</h5>
            <h6 className="h6">&lt;h6 class="h6"&gt;</h6>
          </div>
          <p>The recommended font is Raleway served by Google:</p>
          <CodeSnippet code={fontCss} lang="html" />
          <p>
            The .shadow-l and .shadow-h classes can be used to add box shadows
            to elements. The .shadow-l class adds a low level shadow meaning it
            will appear close to the origin plane:
          </p>
          <div style={{ 'textAlign': 'center' }}>
            <img
              className="shadow-l"
              src="./hb.jpg"
              alt="Bonsai with low shadow"
              width="250"
            />
          </div>
          <p>
            The .shadow-h class adds a high level shadow meaning it will appear
            further away from the origin plane than the lower shadow level:
          </p>
          <div style={{ 'textAlign': 'center' }}>
            <img
              className="shadow-h"
              src="./hb.jpg"
              alt="Bonsai with high shadow"
              width="250"
            />
          </div>
        </Topic>
        <Topic title="Buttons">
          <ButtonExample />
        </Topic>
        <Topic title="Inputs">
          <InputExample />
        </Topic>
        <Topic title="Cards">
          <p>
            Cards can be used to build dialogues or prompts as well as display
            grouped information:
          </p>
          <div className="row">
            <div className="col-12 sm-4" style={spacingStyle}>
              <Card title="Bonsai">
                <p>This card has a title text and no title background image.</p>
              </Card>
            </div>
            <div className="col-12 sm-4" style={spacingStyle}>
              <Card
                height="150px"
                imgSrc="./hb.jpg">
                <p>
                  This card has no title text but has a title background image.
                </p>
              </Card>
            </div>
            <div className="col-12 sm-4" style={spacingStyle}>
              <Card
                title="Bonsai"
                height="150px"
                imgSrc="./hb.jpg">
                <p>This card has a title text and a title background image.</p>
              </Card>
            </div>
          </div>
        </Topic>
        <Topic title="Loading">
          <p>
            Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse
            enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis
            amet minim in. Exercitation nostrud occaecat consectetur sit est
            adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua
            dolor exercitation nisi amet adipisicing ea reprehenderit culpa
            aliqua minim ut. Et aliquip veniam pariatur veniam excepteur
            deserunt duis voluptate. Esse magna laboris ullamco quis incididunt
            deserunt laboris qui nulla.
          </p>
          <p>
            Voluptate culpa ullamco proident nulla elit aute sit laboris mollit
            in. Occaecat consequat dolor excepteur velit exercitation deserunt
            eu id est enim cillum pariatur culpa esse excepteur laborum non.
            Elit officia consequat ad aliqua velit adipisicing officia nulla.
          </p>
        </Topic>
        <Topic title="Toggles">
          <p>
            Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse
            enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis
            amet minim in. Exercitation nostrud occaecat consectetur sit est
            adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua
            dolor exercitation nisi amet adipisicing ea reprehenderit culpa
            aliqua minim ut. Et aliquip veniam pariatur veniam excepteur
            deserunt duis voluptate. Esse magna laboris ullamco quis incididunt
            deserunt laboris qui nulla.
          </p>
          <p>
            Voluptate culpa ullamco proident nulla elit aute sit laboris mollit
            in. Occaecat consequat dolor excepteur velit exercitation deserunt
            eu id est enim cillum pariatur culpa esse excepteur laborum non.
            Elit officia consequat ad aliqua velit adipisicing officia nulla.
          </p>
        </Topic>
        <Topic title="Tabs">
          <p>
            Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse
            enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis
            amet minim in. Exercitation nostrud occaecat consectetur sit est
            adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua
            dolor exercitation nisi amet adipisicing ea reprehenderit culpa
            aliqua minim ut. Et aliquip veniam pariatur veniam excepteur
            deserunt duis voluptate. Esse magna laboris ullamco quis incididunt
            deserunt laboris qui nulla.
          </p>
          <p>
            Voluptate culpa ullamco proident nulla elit aute sit laboris mollit
            in. Occaecat consequat dolor excepteur velit exercitation deserunt
            eu id est enim cillum pariatur culpa esse excepteur laborum non.
            Elit officia consequat ad aliqua velit adipisicing officia nulla.
          </p>
        </Topic>
        <Topic title="Tables">
          <p>
            Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse
            enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis
            amet minim in. Exercitation nostrud occaecat consectetur sit est
            adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua
            dolor exercitation nisi amet adipisicing ea reprehenderit culpa
            aliqua minim ut. Et aliquip veniam pariatur veniam excepteur
            deserunt duis voluptate. Esse magna laboris ullamco quis incididunt
            deserunt laboris qui nulla.
          </p>
          <p>
            Voluptate culpa ullamco proident nulla elit aute sit laboris mollit
            in. Occaecat consequat dolor excepteur velit exercitation deserunt
            eu id est enim cillum pariatur culpa esse excepteur laborum non.
            Elit officia consequat ad aliqua velit adipisicing officia nulla.
          </p>
        </Topic>
        <Topic title="Toasters">
          <p>
            Dolor quis aute dolore cupidatat est nisi id tempor adipisicing esse
            enim. Consequat ea id sit in in duis esse aliqua est sunt sint duis
            amet minim in. Exercitation nostrud occaecat consectetur sit est
            adipisicing anim ex. Commodo cillum do sit anim deserunt aliqua
            dolor exercitation nisi amet adipisicing ea reprehenderit culpa
            aliqua minim ut. Et aliquip veniam pariatur veniam excepteur
            deserunt duis voluptate. Esse magna laboris ullamco quis incididunt
            deserunt laboris qui nulla.
          </p>
          <p>
            Voluptate culpa ullamco proident nulla elit aute sit laboris mollit
            in. Occaecat consequat dolor excepteur velit exercitation deserunt
            eu id est enim cillum pariatur culpa esse excepteur laborum non.
            Elit officia consequat ad aliqua velit adipisicing officia nulla.
          </p>
        </Topic>
      </div>
    );
  }
}

export default Home;
