import React, { Component } from 'react';
import TrainingScene from './TrainingScene';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typing Training</h1>
        </header>
          <br />
      <TrainingScene />
      </div>
    );
  }
}

export default App;
