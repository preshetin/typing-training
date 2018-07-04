import React from 'react';
import TypingString from './TypingString';
import { getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';

class TypingStrings extends React.Component {
  constructor(props) {
    super(props);
  }

  keyPressed = (event) => {
    let symbol = event.key;
      
    if (symbol === 'Enter') {
      symbol = ' ';
    }
    if (symbol === "Backspace") {
      this.props.onBackspaceType();
    }
    if (symbol.length !== 1) {
      return;
    }
    this.props.onCharacterType(symbol); 
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    return this.props.chars.map((charsString, index) => {     
      if (getArrayIndexByGlobalIndex(this.props.chars, this.props.currentIndex) === index) {
        return <TypingString key={index} chars={charsString} currentIndex={getStringIndexByGlobalIndex(this.props.chars, this.props.currentIndex)} currentSymbol={this.props.currentSymbol}/>
      } else {
        return <TypingString key={index} chars={charsString} />
      }
    });
  }
}

export default TypingStrings;
