import React, {Component} from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="login-form-title">Masuk Akun</div>
        <div className="row">
          <div className="col-md-4">
            <div className="login-form-subtitle">Belum punya akun?</div>
          </div>
          <div className="col-md-8">
            <NavLink className="login-form-subtitle" id="login-text" to="/auth">Daftar</NavLink>
          </div>
        </div>
        <div className="login-form-label">Email</div>
        <input className="login-form-input" type="text" name="name" placeholder="Email"></input>
        <div className="login-form-label">Password</div>
        <input className="login-form-input" type="password" name="pass" placeholder="Password"></input>
        <button className="login-button">Masuk</button>
      </div>
    );
  }
}

export default Signup;
