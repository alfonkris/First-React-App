import React, {Component} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

class Auth extends Component {
  handleClick() {

    $.ajax({

      url: "/auth",
      type: "post",
      data: $("#the-form").serialize(),
      success: function(res) {

        location.href = "/signin";
        return false;
      },
      error: function(xhr, status, error) {
        var i_name = $('#input_name').val();
        var i_email = $('#input_email').val();
        var i_pass = $('#input_password').val();

        if (i_name == "" || i_email == "" || i_pass == "") {}
        console.log(xhr.responseText);
        var err = '';
        $.each(JSON.parse(xhr.responseText), function(i, item) {

          err += '<li>' + item.msg + '</li>';
        });
        $(".err-area").html(err);
        return false;
      }

    });
  }

  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="login-banner">
              <div className="login-banner-title">Gabung Sekarang di CCC!</div>
              <div className="login-banner-subtitle">Tingkatkan skillmu di Code Course Camp. Perbanyak peluang untuk mengejar cita-citamu!</div>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-12">

            <div className="login-form">
              <div className="login-form-title">Buat Akun</div>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-7">
                  <div className="login-form-subtitle">Sudah punya akun?</div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-5">
                  <NavLink className="login-form-subtitle" id="login-text" to="/signin">Masuk</NavLink>
                </div>
              </div>
              <form method="post" action="" id="the-form">
                <div className="login-form-label">Nama lengkap</div>
                <input id="input_name" className="login-form-input" type="text" name="name" placeholder="Nama Lengkap"></input>
                <div className="login-form-label">Email</div>
                <input id="input_email" className="login-form-input" type="email" name="email" placeholder="Email"></input>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="login-form-label">Password</div>
                    <input id="input_password" className="login-form-input" type="password" name="password"></input>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="login-form-label">Confirm password</div>
                    <input className="login-form-input" type="password"></input>
                  </div>
                </div>
                <button className="login-button" onClick={this.handleClick}>Daftar</button>
              </form>
              <div className="error-content">
                <ul className="err-area"></ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
