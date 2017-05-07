import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Auth from './Auth';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/auth' component={Auth}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
