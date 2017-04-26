import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import logo from './assets/codecoursecamp-logo.png';

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="row">
          <div className="col-md-6">
            <img className="desc-image" src={logo}/>
          </div>
          <div className="col-md-6">
            <div className="desc-text">
              <div className="text-content">Apa itu CCC?</div>
              <div className="subtext-content">Code Course Camp adalah kursus yang dibuat oleh Code Margonda. Kursus ini diperuntukkan untuk kamu yang ingin membuat aplikasi sendiri.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
