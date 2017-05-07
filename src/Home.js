import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';
import Classes from './Classes';
import Trainer from './Trainer';
import Level from './Level';
import Schedule from './Schedule';
import Register from './Register';
import Syllabus from './Syllabus';
import Testimony from './Testimony';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Classes />
        <Level />
        <Trainer />
        <Schedule />
        <Register />
        <Syllabus />
        <Testimony />
        <Footer />
      </div>
    );
  }
}

export default Home;
