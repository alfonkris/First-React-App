import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import trainer1 from './image/consultant1.jpg';
import trainer2 from './image/consultant2.jpg';
import trainer3 from './image/consultant3.jpg';
import trainer4 from './image/consultant4.jpg';

const trainer = [
  {
    img_url: trainer1,
    name: "Gungde Aditya",
    job: "Android Developer"
  }, {
    img_url: trainer2,
    name: "David Cornelius",
    job: "Android Developer"
  }, {
    img_url: trainer3,
    name: "Fuad Aji Pratomo",
    job: "Web Developer"
  }, {
    img_url: trainer4,
    name: "Jefri Yushendri",
    job: "Web Developer"
  }
];

class Trainer extends Component {
  render() {
    return (
      <div className="trainer">
        <div className="trainer-title">Pengajar</div>
        <div className="row">

          {trainer.map(function(tr, index) {
            return (
              <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                <img className="trainer-image" src={tr.img_url}/>
                <div className="trainer-text">{tr.name}</div>
                <div className="trainer-subtext">{tr.job}</div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

export default Trainer;
