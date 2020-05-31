import React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";

import './App.scss';
import Navigation from './components/Navigation';
import SignInContainer from "./components/Auth/SignInContainer";
import SignUpContainer from "./components/Auth/SignUpContainer";

const history = createBrowserHistory();
const isAuth = localStorage.getItem('jwt');
console.log(isAuth);

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/sign-in" component={SignInContainer}/>
          <Route exact path="/sign-up" component={SignUpContainer}/>
          {
            isAuth ? <Route path="/" component={Navigation}/> : <Redirect to="/sign-in" />
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
