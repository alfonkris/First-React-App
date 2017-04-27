import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import BeginnerImage from './image/beginner.png';
import IntermediateImage from './image/intermediate.jpg';
import AdvancedImage from './image/advanced.jpg';

class Level extends Component{
  render(){
    return(
      <div className="level">
        <div className="level-title">Tingkatan</div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="level-content">
              <img className="level-image" src={BeginnerImage}/>
              <div className="level-text">
                <div className="level-text-head">Beginner</div>
                <div className="level-text-desc">Cocok untuk kamu yang baru mulai belajar.</div>
                <div className="row level-type">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-android">Android</div>
                    <div className="level-web">Web</div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-price">
                      Rp 1.000.000,-
                      Rp 1.250.000,-
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="level-content">
              <img className="level-image" src={IntermediateImage}/>
              <div className="level-text">
                <div className="level-text-head">Intermediate</div>
                <div className="level-text-desc">Untuk kamu yang tertarik memperdalam skill.</div>
                <div className="row level-type">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-android">Android</div>
                    <div className="level-web">Web</div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-price">
                      Rp 1.000.000,-
                      Rp 1.250.000,-
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="level-content">
              <img className="level-image" src={AdvancedImage}/>
              <div className="level-text">
                <div className="level-text-head">Advanced</div>
                <div className="level-text-desc">Kamu akan terlibat dalam project sungguhan dalam kelas ini.</div>
                <div className="row level-type">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-android">Android</div>
                    <div className="level-web">Web</div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="level-price">
                      Rp 1.000.000,-
                      Rp 1.250.000,-
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Level;
