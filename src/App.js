import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const TRAINING_STRING = "ппп ррр ппп ррр";
const TRAINING_STRING = "fff jjj fff jjj";

const Character = (props) => {
  return <code>{props.symbol}</code>;
}

const IncorrectCharacter = (props) => {
  return <code style={{ backgroundColor: "red" }}>{props.symbol}</code>;
}

const CorrectCharacter = (props) => {
  return <code style={{ color: "blue" }}>{props.symbol}</code>;
}

const CurrentCharacter = (props) => {
  return <code style={{ backgroundColor: "blue", color: "white" }}>{props.symbol}</code>;
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
    if (symbol === "Backspace") {
      let st = this.state;
        if (st.currentIndex > 0) {
          st.currentIndex--;
          st.chars[st.currentIndex].isCorrect = null;
        }
      this.setState(st);
      return;
    }
    if (symbol.length !== 1) {
      return;
    }
    let st = this.state;
    if (symbol === this.state.chars[this.state.currentIndex].symbol) {
      console.log(symbol, this.state.chars[this.state.currentIndex].symbol, "correct");
      st.chars[st.currentIndex].isCorrect = true;
    } else {
      console.log(symbol, this.state.chars[this.state.currentIndex].symbol, "wrong");
      st.chars[st.currentIndex].isCorrect = false;
    }
    st.currentIndex++;
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    const chars = [];
    TRAINING_STRING.split('').forEach(symbol => chars.push({
      symbol,
      isCorrect: null
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
      {this.state.chars.map((char, index) => {
        switch (char.isCorrect) {
          case true:
            return <CorrectCharacter key={index} symbol={char.symbol} />
          case false:
            return <IncorrectCharacter key={index} symbol={char.symbol} />
          case null:
            return (index === this.state.currentIndex) ? <CurrentCharacter key={index} symbol={char.symbol} /> : <Character key={index} symbol={char.symbol} />
        }
      })}
        </p>
      </div>
    );
  }
}

export default App;
