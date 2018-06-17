import React from "react";
import IncorrectCharacter from './IncorrectCharacter';

const Character = (props) => {
  return <div style={{ fontFamily: "'Roboto Mono', monospace", display: "inline", fontSize: "300%" }}>{props.symbol}</div>;
}


const CorrectCharacter = (props) => {
  return <div style={{  fontFamily: "'Roboto Mono', monospace", display: "inline", fontSize: "300%", color: "blue" }}>{props.symbol}</div>;
}

const CurrentCharacter = (props) => {
  return <div style={{  fontFamily: "'Roboto Mono', monospace", display: "inline",  fontSize: "300%", backgroundColor: "blue", color: "white" }}>{props.symbol}</div>;
}

function TypingString(props) {
  return props.chars.map((char, index) => {
      switch (char.isCorrect) {
        case true:
          return <CorrectCharacter key={index} symbol={char.symbol} />
        case false:
          return <IncorrectCharacter key={index} symbol={char.symbol} incorrectSymbol={props.currentSymbol}/>
        case null:
          return (index === props.currentIndex) ? <CurrentCharacter key={index} symbol={char.symbol} /> : <Character key={index} symbol={char.symbol} />
      }
    });
}

export default TypingString;
