import React, { Component } from 'react';
import Banner from '../../organisms/banner/Banner';
import Topic from '../../organisms/topic/Topic';
import GridExample from '../../organisms/grid-example/GridExample';
import ButtonExample from '../../organisms/button-example/ButtonExample';
import InputExample from '../../organisms/input-example/InputExample';
// import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';
import Card from '../../molecules/card/Card';
import Switch from '../../molecules/switch/Switch';
import Checkbox from '../../molecules/checkbox/Checkbox';
import Radiobutton from '../../molecules/radiobutton/Radiobutton';
import LazyLoad from 'react-lazyload';

const spacingStyle = {
  boxSizing: 'border-box',
  border: '1px solid #fff',
  marginBottom: '.66rem',
  fontSize: '.75rem',
  marginLeft: 'auto',
  marginRight: 'auto'
};

class Home extends Component {
  render() {
    return (
      <div>
        <Banner logo="./logo.svg" bannerBg="./hb_1920.jpg" />
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
          <div className="row" style={{ marginTop: '2rem' }}>
            <LazyLoad height={100}>
              <img
                className="col-3"
                src="./jquery-free.svg"
                alt="JQUERY FREE"
                height="92"
              />
            </LazyLoad>
            <LazyLoad height={100}>
              <img
                className="col-3"
                src="./svg-friendly.svg"
                alt="SVG FRIENDLY"
                height="92"
              />
            </LazyLoad>
            <LazyLoad height={100}>
              <img
                className="col-3"
                src="./pro-sass.svg"
                alt="PRO SASS"
                height="92"
              />
            </LazyLoad>
            <LazyLoad height={100}>
              <img
                className="col-3"
                src="./sketch-assets.svg"
                alt="SKETCH ASSETS"
                height="92"
              />
            </LazyLoad>
          </div>
        </Topic>
        <Topic title="The Grid System">
          <GridExample />
        </Topic>
        <Topic title="Typography">
          <p>
            <h3 className="f3">Font Sizes</h3>
            Type is all set with the rems, so font-sizes and spacial
            relationships can be responsively sized based on a single{' '}
            <code>&lt;html&gt;</code> font-size property.
          </p>
          <p>Font sizing uses the following f# classes:</p>
          <div className="tc" style={{ marginBottom: '3rem' }}>
            <div className="f1">class="f1"</div>
            <div className="f2">class="f2"</div>
            <div className="f3">class="f3"</div>
            <div className="f4">class="f4"</div>
            <div className="f5">class="f5"</div>
            <div className="f6">class="f6"</div>
            <div className="f7">class="f7"</div>
          </div>
          <h3 className="f3">Shadows</h3>
          <p>
            The .shadow-l and .shadow-h classes can be used to add box shadows
            to elements. The .shadow-l class adds a low level shadow meaning it
            will appear close to the origin plane:
          </p>
          <div style={{ textAlign: 'center' }}>
            <LazyLoad height={200}>
              <img
                className="shadow-l"
                src="./hb_250.jpg"
                alt="Bonsai with low shadow"
                width="250"
              />
            </LazyLoad>
          </div>
          <p>
            The .shadow-h class adds a high level shadow meaning it will appear
            further away from the origin plane than the lower shadow level:
          </p>
          <div style={{ textAlign: 'center' }}>
            <LazyLoad height={200}>
              <img
                className="shadow-h"
                src="./hb_250.jpg"
                alt="Bonsai with high shadow"
                width="250"
              />
            </LazyLoad>
          </div>
          <p>
            The .shadow--pop class adds a shadow on interaction with the
            element:
          </p>
          <div style={{ textAlign: 'center' }}>
            <LazyLoad height={200}>
              <img
                className="shadow--pop"
                src="./hb_250.jpg"
                alt="Bonsai with interactive shadows"
                width="250"
              />
            </LazyLoad>
          </div>
          <h3 className="f3">Alignment</h3>
          <p>Text Alignment can be done using the following classes:</p>
          <div style={{ marginBottom: '3rem' }}>
            <p className="tl f5">
              <strong>class="tl"</strong> for left aligned text
            </p>
            <p className="tc f5">
              <strong>class="tc"</strong> for center aligned text
            </p>
            <p className="tr f5">
              <strong>class="tr"</strong> for right aligned text
            </p>
            <p className="tj f5">
              <strong>class="tj"</strong> for justified text which is when the
              text is aligned along the left margin, and letter- and
              word-spacing is adjusted so that the text falls flush with both
              margins.
            </p>
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
              <Card title="Bonsai" classes="shadow--pop">
                <p className="f7">
                  This card has a title text and no title background image.
                </p>
              </Card>
            </div>
            <div className="col-12 sm-4" style={spacingStyle}>
              <Card height="150px" imgSrc="./hb_250.jpg" classes="shadow--pop">
                <p className="f7">
                  This card has no title text but has a title background image.
                </p>
              </Card>
            </div>
            <div className="col-12 sm-4" style={spacingStyle}>
              <Card
                title="Bonsai"
                height="150px"
                imgSrc="./hb_250.jpg"
                classes="shadow--pop">
                <p className="f7">
                  This card has a title text and a title background image.
                </p>
              </Card>
            </div>
          </div>
        </Topic>
        <Topic title="Busy Indicator">
          <p>
            A busy indicator can be used while waiting for an asynchronous task
            to complete and is as simple as adding a div with the class{' '}
            <code>busy</code>:
          </p>
          <div className="row tc">
            <div className="col-6">
              <div className="busy" />
            </div>
            <div className="col-6">
              <div>&lt;div class="busy"&gt;</div>
            </div>
          </div>
          <p>
            The busy indicator scales on font size so you can define a custom
            font size or add a font-sizing class (f#) to get the perfect size of
            indicator:
          </p>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f1" />
            </div>
            <div className="col-6">
              <div className="f1">f1</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f2" />
            </div>
            <div className="col-6">
              <div className="f2">f2</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f3" />
            </div>
            <div className="col-6">
              <div className="f3">f3</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f4" />
            </div>
            <div className="col-6">
              <div className="f4">f4</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f5" />
            </div>
            <div className="col-6">
              <div className="f5">f5</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f6" />
            </div>
            <div className="col-6">
              <div className="f6">f6</div>
            </div>
          </div>
          <div className="row tc">
            <div className="col-6">
              <div className="busy f7" />
            </div>
            <div className="col-6">
              <div className="f7">f7</div>
            </div>
          </div>
        </Topic>
        <Topic title="Toggles">
          Toggles allow users to interact with an application by toggling given
          options on or off. Toggles can be disabled by adding the disabled
          attribute to the input element. Additionally toggles will default to
          unchecked; however, you can set the default to checked by adding the
          checked attribute.
          <h3 className="f3">Checkbox</h3>
          <p>
            Checkboxes are used to toggle options which are independant of
            eachother.
          </p>
          <div>
            <Checkbox />
          </div>
          <h3 className="f3">Switch</h3>
          <p>
            Switches are similar to checkboxes in that they are used to toggle
            options which are independant of eachother. Switches differ from
            checkboxes in that they are used for instaneous actions while
            checkboxes are more passive and often require a seperate submission
            of some sort.
          </p>
          <Switch />
          <h3 className="f3">Radiobutton</h3>
          <p>
            Radio Buttons are used to select one option out of a group of
            mutually exclusive options
          </p>
          <Radiobutton />
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
