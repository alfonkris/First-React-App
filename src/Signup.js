import React, {Component} from 'react';
import './App.css';
import {Link, NavLink} from 'react-router-dom';



class Signup extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="login-form-title">Buat Akun</div>
        <div className="row">
          <div className="col-md-4">
            <div className="login-form-subtitle">Sudah punya akun?</div>
          </div>
          <div className="col-md-8">
            <NavLink className="login-form-subtitle" id="login-text" to="/auth/signin">Masuk</NavLink>
          </div>
        </div>
        <div className="login-form-label">Nama lengkap</div>
        <input className="login-form-input" type="text" name="name" placeholder="Nama Lengkap"></input>
        <div className="login-form-label">Email</div>
        <input className="login-form-input" type="email" name="email" placeholder="Email"></input>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="login-form-label">Password</div>
            <input className="login-form-input" type="password" name="pass"></input>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="login-form-label">Confirm password</div>
            <input className="login-form-input" type="password" name="name"></input>
          </div>
        </div>
        <button className="login-button">Daftar</button>
      </div>
    );
  }
}

export default Signup;
