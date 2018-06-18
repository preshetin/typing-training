import React from 'react';
import TypingString from './TypingString';
import { getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';

const TypingStrings = (props) => {
  
  return props.chars.map((charsString, index) => {     
    if (getArrayIndexByGlobalIndex(props.chars, props.currentIndex) === index) {
      return <TypingString key={index} chars={charsString} currentIndex={getStringIndexByGlobalIndex(props.chars, props.currentIndex)} currentSymbol={props.currentSymbol}/>
    } else {
      return <TypingString key={index} chars={charsString} />
    }
 });
}

export default TypingStrings;
