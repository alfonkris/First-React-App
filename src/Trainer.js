import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import trainer1 from './image/consultant1.jpg';
import trainer2 from './image/consultant2.jpg';
import trainer3 from './image/consultant3.jpg';
import trainer4 from './image/consultant4.jpg';

class Trainer extends Component {
  render() {
    return (
      <div className="trainer">
        <div className="trainer-title">Pengajar</div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className="trainer-image" src={trainer1}/>
            <div className="trainer-text">Gungde Aditya</div>
            <div className="trainer-subtext">Android Developer</div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className="trainer-image" src={trainer2}/>
            <div className="trainer-text">David Cornelius</div>
            <div className="trainer-subtext">Android Developer</div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className="trainer-image" src={trainer3}/>
            <div className="trainer-text">Fuad Aji Pratomo</div>
            <div className="trainer-subtext">Web Developer</div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className="trainer-image" src={trainer4}/>
            <div className="trainer-text">Jefri Yushendri</div>
            <div className="trainer-subtext">Web Developer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trainer;
