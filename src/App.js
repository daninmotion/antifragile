import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Video from './containers/Video/Video';
import NavBar from './components/Nav/NavBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          // avatar={'https://randomuser.me/api/portraits/women/44.jpg'}
        />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/video" exact component={Video} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;