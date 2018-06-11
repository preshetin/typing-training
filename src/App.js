import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const TRAINING_STRING = "ппп ррр ппп ррр";
const TRAINING_STRING = "fff jjj fff jjj";

const Char = (props) => {
  return <code>{props.char.symbol}</code>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: [],
      currentIndex: 0
    }
    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(event){
    const symbol = event.key;
    if (symbol === this.state.chars[this.state.currentIndex].symbol) {
      console.log(symbol, this.state.chars[this.state.currentIndex].symbol, "correct");
    } else {
      console.log(symbol, this.state.chars[this.state.currentIndex].symbol, "wrong");
    }
    let st = this.state;
    st.currentIndex++;
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    const chars = [];
    TRAINING_STRING.split('').forEach(symbol => chars.push({
      symbol,
      isTyped: null
    }));
    let st = this.state;
    st.chars = chars;
    this.setState(st);
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
          <br />
          {this.state.chars.map((char, index) => <Char key={index} char={char} />)}
        </p>
      </div>
    );
  }
}

export default App;
