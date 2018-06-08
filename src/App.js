import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingString: "fff ddd fff ddd",
      currentIndex: 0
    }
    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(event){
    const char = event.key;
    if (char === this.state.trainingString[this.state.currentIndex]) {
      console.log(char, "correct");
    } else {
      console.log(char, "wrong");
    }
    let st = this.state;
    st.currentIndex++;
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Typing Training</h1>
        </header>
        <p className="App-intro">
          <code>{this.state.trainingString}</code>
        </p>
      </div>
    );
  }
}

export default App;
