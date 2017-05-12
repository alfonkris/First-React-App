import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="login-banner">
              <div className="login-banner-title">Gabung Sekarang di CCC!</div>
              <div className="login-banner-subtitle">Tingkatkan skillmu di Code Course Camp. Perbanyak peluang untuk mengejar cita-citamu!</div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">

            <div className="login-form">
              <div className="login-form-title">Masuk Akun</div>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-7">
                  <div className="login-form-subtitle">Belum punya akun?</div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-5">
                  <NavLink className="login-form-subtitle" id="login-text" to="/auth">Daftar</NavLink>
                </div>
              </div>
              <div className="login-form-label">Email</div>
              <input className="login-form-input" type="text" name="name" placeholder="Email"></input>
              <div className="login-form-label">Password</div>
              <input className="login-form-input" type="password" name="pass" placeholder="Password"></input>
              <button className="login-button">
                <NavLink id="login-button" to="/dashboard">Masuk</NavLink>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
