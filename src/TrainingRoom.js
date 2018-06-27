import React from 'react';
import ExerciseResult from './ExerciseResult';
import TypingStrings from './TypingStrings';
import Keyboard from './Keyboard';
import { exerciseIsFinished, getCharByGlobalIndex, getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';

//const TRAINING_STRING = ["ппп ррр ппп ррр"];
//const TRAINING_STRING = ["fff jjj"];
//const TRAINING_STRING = ["fff jjj fff jjj", "ffj ffj jjf jjf", "jfj jfj fjf fjf"];
const TRAINING_STRING = ["fff", "ff", "jfj", "jjj"];

class TrainingRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exercices: [
        ["ff", "fff"],
        ["jjj"],
        ["fff", "ff", "jfj", "jjj"]
      ],
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
      exerciseIndex: 0,
      currentSymbol: ""
    }
    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(event) {
    let symbol = event.key;

    if (symbol === "Enter" && exerciseIsFinished(this.state.chars, this.state.currentIndex)) {
      this.prepareNextExercise();
      return;
    }
    if (symbol === 'Enter') {
      symbol = ' ';
    }
    if (symbol === "Backspace") {
      if (exerciseIsFinished(this.state.chars, this.state.currentIndex)) {
       return; 
      } 
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

  prepareExerciseChars(exercise) {
    const chars = [];
    exercise.forEach((str, index) => {
      chars.push([]);
      str.split('').forEach((symbol, charIndex) => {
        chars[index].push({ symbol, isCorrect: null })
        if (str.length === charIndex + 1) {
          chars[index].push({ symbol: " ", isCorrect: null });
        }
      });
    });
    return chars;
  }

  prepareNextExercise = () => {
    console.log('preparing next exercice...');
    const st = this.state;
    st.currentIndex = 0;
    st.currentSymbol = "";
    st.exerciseIndex++;
    st.chars = this.prepareExerciseChars(st.exercices[st.exerciseIndex]);
    this.setState(st);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    const chars = this.prepareExerciseChars(this.state.exercices[0]);
    let st = this.state;
    st.chars = chars;
    this.setState(st);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }


  render() {
    if (this.state.chars.length === 0) {
      return "Loading...";
    }
    if (exerciseIsFinished(this.state.chars, this.state.currentIndex)) {
      return <ExerciseResult errorRate={0.7} nextExerciseIndex={1} onNextExercice={this.prepareNextExercise} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col">
          <div className="card ">
            <div className="card-body">
              <TypingStrings chars={this.state.chars} currentIndex={this.state.currentIndex} currentSymbol={this.state.currentSymbol} />
            </div>
          </div>   
          </div>   
        </div>
        <div className="row">
          <Keyboard lang="en" hide/>
        </div>
        <div className="row">
          <div className="col">
            <div className="btn-group d-flex btn-group-sm" role="group" aria-label="...">
              <button type="button" className="btn btn-primary w-100"></button>
              <button type="button" className="btn btn-primary w-100">Middle</button>
              <button type="button" className="btn btn-secondary disabled w-100">Right</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingRoom;
