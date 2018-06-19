import React from "react";
import IncorrectCharacter from './IncorrectCharacter';
import './TypingString.css';

const Character = (props) => {
  return <div className="Character" >{props.symbol}</div>;
}

const CorrectCharacter = (props) => {
  return <div className="Character" style={{ color: "blue" }}>{props.symbol}</div>;
}

const CurrentCharacter = (props) => {
  return <div className="Character" style={{ backgroundColor: "blue", color: "white" }}>{props.symbol}</div>;
}

function TypingString(props) {
  return (
    <div className="String">
      {props.chars.map((char, index) => {
      switch (char.isCorrect) {
        case true:
          return <CorrectCharacter key={index} symbol={char.symbol} />
        case false:
          return <IncorrectCharacter key={index} symbol={char.symbol} incorrectSymbol={props.currentSymbol}/>
        case null:
          return (index === props.currentIndex) ? <CurrentCharacter key={index} symbol={char.symbol} /> : <Character key={index} symbol={char.symbol} />
      }
    })} 
    <br />
  </div>
  );
}

export default TypingString;
