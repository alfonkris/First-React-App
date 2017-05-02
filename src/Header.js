import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import HeaderImage from './image/header.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="image" src={HeaderImage}/>
        <div className="header-caption">
          <div className="header-text">CODE COURSE CAMP</div>
          <div className="header-subtext">Semua orang bisa belajar coding!</div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <button className="header-button button-daftar">Daftar Sekarang</button>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <button className="header-button button-info">Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
