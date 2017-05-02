import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import Navbar from './Navbar';
import Header from './Header';
import Description from './Description';
import Classes from './Classes';
import Trainer from './Trainer';
import Level from './Level';
import Schedule from './Schedule';
import Register from './Register';
import Syllabus from './Syllabus';
import Testimony from './Testimony';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Description />
        <Classes />
        <Trainer />
        <Level />
        <Schedule />
        <Register />
        <Syllabus />
        <Testimony />
      </div>
    );
  }
}

export default App;
