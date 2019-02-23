import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Video from './containers/Video/Video';
import StyleGuide from './containers/StyleGuide/StyleGuide';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/video" exact component={Video} />
            <Route path="/style-guide" exact component={StyleGuide} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;