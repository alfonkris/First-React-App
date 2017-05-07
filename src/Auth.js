import React, {Component} from 'react';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class Auth extends Component {
  render() {
    return (
      <Router>
        <div className="login">
          <div className="row">
            <div className="col-md-7 col-sm-7 col-xs-12">
              <div className="login-banner">
                <div className="login-banner-title">Gabung Sekarang di CCC!</div>
                <div className="login-banner-subtitle">Tingkatkan skillmu di Code Course Camp. Perbanyak peluang untuk mengejar cita-citamu!</div>
              </div>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-12">

              <Switch>
                <Route exact path='/auth' component={Signup}/>
                <Route exact path='/auth/signin' component={Signin}/>
              </Switch>

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Auth;
