import React, {Component} from 'react';
import './style.css';

const trainer = [
  {
    img_url: "assets/consultant1.jpg",
    name: "Gungde Aditya",
    job: "Android Developer"
  }, {
    img_url: "assets/consultant2.jpg",
    name: "David Cornelius",
    job: "Android Developer"
  }, {
    img_url: "assets/consultant3.jpg",
    name: "Fuad Aji Pratomo",
    job: "Web Developer"
  }, {
    img_url: "assets/consultant4.jpg",
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
