import React from 'react';
import Api from './api';
import ExerciseResult from './ExerciseResult';
import ExerciseNav from './ExerciseNav';
import TypingStrings from './TypingStrings';
import Keyboard from './Keyboard';
import { isExercisePassed, correctRate, exerciseIsFinished, getCharByGlobalIndex, getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';
import { prepareExercises } from './utils';

class TrainingRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lesson: null,
      exercises: [],
      chars: [],
      currentIndex: 0,
      exerciseIndex: 0,
      currentSymbol: ""
    }
  }

  prepareExerciseChars(exercise) {
    const chars = [];
    exercise.forEach((str, index) => {
      chars.push([]);
      str.split('').forEach((symbol, charIndex) => {
        chars[index].push({ symbol, typeStatus: null })
        if (str.length === charIndex + 1) {
          chars[index].push({ symbol: " ", typeStatus: null });
        }
      });
    });
    return chars;
  }

  prepareNextExercise = () => {
    this.prepareExersiseAtIndex(this.state.exerciseIndex + 1);
  }

  prepareTryAgain = () => {
    this.prepareExersiseAtIndex(this.state.exerciseIndex);
  }

  prepareExersiseAtIndex(index) {
    const st = this.state;
    st.currentIndex = 0;
    st.currentSymbol = "";
    st.exerciseIndex = index;
    st.chars = this.prepareExerciseChars(st.exercises[st.exerciseIndex].task);
    this.setState(st);
  }

  componentDidMount() {
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.getLessonExercisesAndLog(this.props.match.params.lessonId, (exersices, lessonLog) => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.exercises = prepareExercises(exersices);
      st.chars = this.prepareExerciseChars(st.exercises[0].task);
      st.lessonLog = lessonLog;
      this.setState(st);
    });
  }

  handleCharacterType = (symbol) => {
    let st = this.state;
    if (symbol === getCharByGlobalIndex(this.state.chars, this.state.currentIndex).symbol) {
     if (st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].typeStatus === 'fixing') {
       st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].typeStatus = 'fixed';
     } else {
     st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].typeStatus = 'correct';
     }
    } else {
     st.chars[getArrayIndexByGlobalIndex(this.state.chars, this.state.currentIndex)][getStringIndexByGlobalIndex(this.state.chars, this.state.currentIndex)].typeStatus = 'mistake';
    }
    st.currentIndex++;
    st.currentSymbol = symbol;
    this.setState(st);
  }

  handleBackspaceType = (symbol) => {
    let st = this.state;
      if (st.currentIndex > 0) {
        st.currentIndex--;
        if (st.chars[getArrayIndexByGlobalIndex(st.chars, st.currentIndex)][getStringIndexByGlobalIndex(st.chars, st.currentIndex)].typeStatus === 'mistake' || st.chars[getArrayIndexByGlobalIndex(st.chars, st.currentIndex)][getStringIndexByGlobalIndex(st.chars, st.currentIndex)].typeStatus === 'fixed') {
          st.chars[getArrayIndexByGlobalIndex(st.chars, st.currentIndex)][getStringIndexByGlobalIndex(st.chars, st.currentIndex)].typeStatus = 'fixing';
        } else {
          st.chars[getArrayIndexByGlobalIndex(st.chars, st.currentIndex)][getStringIndexByGlobalIndex(st.chars, st.currentIndex)].typeStatus = null;
        }
      }
    this.setState(st);
    return;
  }

  saveLessonLog() {
    
  }

  render() {
    if (this.state.chars.length === 0) {
      return "Loading...";
    }
    
    if (exerciseIsFinished(this.state.chars, this.state.currentIndex)) {
      this.saveLessonLog();

      return <ExerciseResult 
        correctRate={correctRate(this.state.chars)} 
        onTryAgain={this.prepareTryAgain} 
        onNextExercice={this.prepareNextExercise}
        />;
    }

    return (
      <div>
        <div className="row">
          <div className="col">
          <div className="card ">
            <div className="card-body">
              <TypingStrings 
                chars={this.state.chars} 
                currentIndex={this.state.currentIndex} 
                currentSymbol={this.state.currentSymbol}
                onCharacterType={this.handleCharacterType}
                onBackspaceType={this.handleBackspaceType} 
              />
            </div>
          </div>   
          </div>   
        </div>
        <div className="row">
          <Keyboard lang="en" hide/>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <ExerciseNav exercises={this.state.exercises} activeIndex={this.state.exerciseIndex} />
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingRoom;
