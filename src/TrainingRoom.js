import React from 'react';
import TypingStrings from './TypingStrings';
import Keyboard from './Keyboard';
import { getCharByGlobalIndex, getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';

//const TRAINING_STRING = "ппп ррр ппп ррр";
//const TRAINING_STRING = "fff jjj fff jjj";
const TRAINING_STRING = ["fff jjj fff jjj", "ffj ffj jjf jjf", "jfj jfj fjf fjf"];

class TrainingRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chars: [
        //        [
        //          { symbol: "f", isCorrect: true },
        //          { symbol: "f", isCorrect: true },
        //          { symbol: "f", isCorrect: true }
        //        ],
        //        [
        //          { symbol: "j", isCorrect: null },
        //          { symbol: "j", isCorrect: null },
        //          { symbol: "j", isCorrect: null }
        //        ],
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
          st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = null;
        }
      this.setState(st);
      return;
    }
    if (symbol.length !== 1) {
      return;
    }
    if (this.state.currentIndex > 0 && getCharByGlobalIndex(this.state.chars, this.state.currentIndex - 1).isCorrect === false) {
      return; 
    }
    let st = this.state;
    if (symbol === getCharByGlobalIndex(this.state.chars, this.state.currentIndex).symbol) {
      st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = true;
    } else {
      st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].isCorrect = false;
    }
    st.currentIndex++;
    st.currentSymbol = symbol;
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    const chars = [];
    TRAINING_STRING.forEach((str, index) => {
      chars.push([]);
      str.split('').forEach((symbol, charIndex) => {
        chars[index].push({ symbol, isCorrect: null })
        if (str.length === charIndex + 1) {
          chars[index].push({ symbol: " ", isCorrect: null });
        }
      });
    });
    let st = this.state;
    st.chars = chars;
    this.setState(st);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
          <div class="card ">
            <div class="card-body">
              <TypingStrings chars={this.state.chars} currentIndex={this.state.currentIndex} currentSymbol={this.state.currentSymbol} />
            </div>
          </div>   
          </div>   
        </div>
        <div className="row">
          <Keyboard lang="en"/>
        </div>
        <div className="row">
          <div className="col">
            <div class="btn-group d-flex btn-group-sm" role="group" aria-label="...">
              <button type="button" class="btn btn-primary w-100"></button>
              <button type="button" class="btn btn-primary w-100">Middle</button>
              <button type="button" class="btn btn-secondary disabled w-100">Right</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingRoom;
