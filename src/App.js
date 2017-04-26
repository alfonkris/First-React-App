import React, {Component} from 'react';
import './App.css';
import './bootstrap/css/bootstrap.css';
import Navbar from './Navbar';
import Header from './Header';
import Description from './Description';
import Classes from './Classes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Description />
        <Classes />
      </div>
    );
  }
}

export default App;
