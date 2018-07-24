import React from 'react';
import { isExercisePassed, MINIMUM_CORRECT_RATE } from '../arrayConverter';
import JumbotronWithEnterKeyAction from './JumbotronWithEnterKeyAction';
import { Link } from 'react-router-dom';

class TaskResult extends React.Component {
  
  handleTryAgain = () => {
    this.props.onTryAgain();
  }

  handleNextClick = (e) => {
    //console.log(e.target);
    this.props.onNextExercice();
  }

  keyPressed = (event) => {
    let symbol = event.key;

    if (symbol !== "Enter") {
      return;
    }
   
    if (isExercisePassed(this.props.correctRate)) {
      this.props.onNextExercice();
    } else {
      this.props.onTryAgain();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed, false);
    if (isExercisePassed(this.props.correctRate)) {
      this.props.onSaveLog(this.props.correctRate);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    if (isExercisePassed(this.props.correctRate) ) {
      return (
        <JumbotronWithEnterKeyAction 
          title="✅ Good!"
          text={`Correct rate is ${parseInt(this.props.correctRate)}%`}
          onSecondaryAction={this.props.onTryAgain}
          onPrimaryAction={this.props.onNextExercice}
        />
      );
    } else {
      return (
        <JumbotronWithEnterKeyAction 
          title="📛 Try Again"
          text={`Your correct rate is ${parseInt(this.props.correctRate)}%, needs to be at least ${MINIMUM_CORRECT_RATE}%`}
          onPrimaryAction={this.handleTryAgain}
          primaryActionText="Try Again"
        />
      );
    }
  }
}

export default TaskResult;
