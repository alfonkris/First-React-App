import React, {Component} from 'react';
import './App.css';
import logoCCC from './assets/ccc-logo-white.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row" id="footer-content">
          <div className="col-md-7 col-sm-6 col-xs-12">
            <img id="footer-ccc-logo" src={logoCCC}/>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="footer-text">Dapatkan berita terbaru & event yang akan datang</div>
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-8">
                <input className="footer-input" type="text" name="email" defaultValue="Email"/>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-4">
                <div className="footer-button">Daftar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>
        <div className="row" id="footer-content">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="footer-section">COMPANY</div>
            <div id="footer-subsection">Tentang Kami</div>
            <div id="footer-subsection">Tim</div>
            <div id="footer-subsection">Karir</div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="footer-section">MORE</div>
            <div id="footer-subsection">Hubungi Kami</div>
            <div id="footer-subsection">FAQ</div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="footer-section">REVIEWS</div>
            <div id="footer-subsection">Laporan Kursus</div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div id="footer-section">COMPANY</div>
            <div id="footer-subsection">Tentang Kami</div>
            <div id="footer-subsection">Tim</div>
            <div id="footer-subsection">Karir</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
