import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/home/Home';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Redirect from='/*' to='/'/>
        </Switch>
      </main>
    );
  }
}

export default App;
