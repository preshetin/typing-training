import React from "react";
import IncorrectCharacter from './IncorrectCharacter';

const TRAINING_STRING = "ппп ррр ппп ррр";
//const TRAINING_STRING = "fff jjj fff jjj";

const Character = (props) => {
  return <div style={{ fontFamily: "'Roboto Mono', monospace", display: "inline", fontSize: "300%" }}>{props.symbol}</div>;
}


const CorrectCharacter = (props) => {
  return <div style={{  fontFamily: "'Roboto Mono', monospace", display: "inline", fontSize: "300%", color: "blue" }}>{props.symbol}</div>;
}

const CurrentCharacter = (props) => {
  return <div style={{  fontFamily: "'Roboto Mono', monospace", display: "inline",  fontSize: "300%", backgroundColor: "blue", color: "white" }}>{props.symbol}</div>;
}

class TrainingScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: [
/*        {
          symbol: "f",
          isCorrect: true
        },
        {
          symbol: "f",
          isCorrect: false
        },
        {
          symbol: "f",
          isCorrect: null
        }*/
      ],
      currentIndex: 0,
      currentSymbol: ""
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
    if (this.state.currentIndex > 0 && this.state.chars[this.state.currentIndex - 1].isCorrect == false) {
     return; 
    }
    let st = this.state;
    if (symbol === this.state.chars[this.state.currentIndex].symbol) {
      st.chars[st.currentIndex].isCorrect = true;
    } else {
      st.chars[st.currentIndex].isCorrect = false;
    }
    st.currentIndex++;
    st.currentSymbol = symbol;
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
    return this.state.chars.map((char, index) => {
        switch (char.isCorrect) {
          case true:
            return <CorrectCharacter key={index} symbol={char.symbol} />
          case false:
            return <IncorrectCharacter key={index} symbol={char.symbol} incorrectSymbol={this.state.currentSymbol}/>
          case null:
            return (index === this.state.currentIndex) ? <CurrentCharacter key={index} symbol={char.symbol} /> : <Character key={index} symbol={char.symbol} />
        }
      });
  }
}

export default TrainingScene;
