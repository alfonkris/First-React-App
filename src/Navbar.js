import React, {Component} from 'react';
import logo from './assets/ccc-logo.png';
import './App.css';
import './bootstrap/css/bootstrap.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="navbar-header">
                <img className="navbar-logo" src={logo}/>
              </div>
            </div>

            <div className="col-md-8 col-sm-8 col-xs-8">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a className="text-red" href="#">BERANDA</a>
                  </li>
                  <li>
                    <a className="text-black" href="#">GALERI</a>
                  </li>
                  <li>
                    <a className="text-black" href="#">PROGRAM</a>
                  </li>
                  <li>
                    <a className="text-black" href="#">DAFTAR</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
