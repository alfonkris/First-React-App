import React, {Component} from 'react';
import logo from './assets/ccc-logo.png';
import './App.css';
import './bootstrap/css/bootstrap.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-fixed-top">

        <div className="row">
          <div className="col-sm-4">
            <div className="navbar-header">
              <img className="navbar-logo" src={logo}/>
            </div>
          </div>

          <div className="col-sm-8">
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
    );
  }
}

export default Navbar;
