import React from 'react';
import TypingStrings from './TypingStrings';
import TaskResult from './TaskResult';
import Keyboard from './Keyboard';
import { isExercisePassed, correctRate, exerciseIsFinished, getCharByGlobalIndex, getArrayIndexByGlobalIndex, getStringIndexByGlobalIndex } from './arrayConverter.js';

class TaskPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: [],
      currentIndex: 0,
      currentSymbol: ""
    };
  }

  prepareTaskChars(task) {
    const chars = [];
    task.forEach((str, index) => {
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

  prepareNextExercise = () => {
    this.props.onNext();
    this.prepareComponent();
  }

  prepareTryAgain = () => {
    this.prepareComponent();
  }

  componentDidMount() {
    this.prepareComponent();
  }

  prepareComponent() {
    let st = JSON.parse(JSON.stringify(this.state));
    st.chars = this.prepareTaskChars(this.props.task);
    st.currentIndex = 0;
    st.currentSymbol = "";
    this.setState(st);
  }

  render() {
    if (this.state.chars.length === 0) {
      return "Loading...";
    }
    
    if (exerciseIsFinished(this.state.chars, this.state.currentIndex)) {
      return <TaskResult 
        correctRate={correctRate(this.state.chars)} 
        onTryAgain={this.prepareTryAgain} 
        onNextExercice={this.prepareNextExercise}
        onSaveLog={this.props.onSaveLog}
        />;
    }

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default TaskPlayground;
