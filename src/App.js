import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import './App.scss';
import Navigation from './components/Navigation';
import SignInContainer from "./components/Auth/SignInContainer";
import SignUpContainer from "./components/Auth/SignUpContainer";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/sign-in" component={SignInContainer} type="Sign In"/>
          <Route exact path="/sign-up" component={SignUpContainer} type="Sign Up"/>
          <Route path="/" component={Navigation}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
