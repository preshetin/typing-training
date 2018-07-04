import React from "react";
import IncorrectCharacter from './IncorrectCharacter';
import './TypingString.css';

const Character = (props) => {
  return <div className="Character" >{props.symbol}</div>;
}

const CorrectCharacter = (props) => {
  return <div className="Character" style={{ color: "#0069d9" }}>{props.symbol}</div>;
}

const FixedCharacter = (props) => {
  return <div className="Character" style={{ backgroundColor: "#ffc107" }}>{props.symbol}</div>;
}

const CurrentCharacter = (props) => {
  return <div className="Character" style={{ backgroundColor: "#0069d9", color: "white" }}>{props.symbol}</div>;
}

function TypingString(props) {
  return (
    <div className="String">
      {props.chars.map((char, index) => {
      switch (char.typeStatus) {
        case 'correct':
          return <CorrectCharacter key={index} symbol={char.symbol} />
        case 'fixed':
          return <FixedCharacter key={index} symbol={char.symbol} />
        case 'mistake':
          return <IncorrectCharacter key={index} symbol={char.symbol} incorrectSymbol={props.currentSymbol}/>
        case null:
        case 'fixing':
          return (index === props.currentIndex) ? <CurrentCharacter key={index} symbol={char.symbol} /> : <Character key={index} symbol={char.symbol} />
      }
    })} 
    <br />
  </div>
  );
}

export default TypingString;
