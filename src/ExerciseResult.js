import React from 'react';
import { isExercisePassed, MINIMUM_CORRECT_RATE } from './arrayConverter';

class ExerciseResult extends React.Component {
  
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
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  render() {
    if (isExercisePassed(this.props.correctRate) ) {
      return (
        <div className="jumbotron text-center">
          <h1>✅ Good!</h1>
          <p className="lead">{`Correct rate is ${parseInt(this.props.correctRate)}%`}</p>
          <button className="btn btn-lg btn-outline-primary" onClick={this.handleTryAgain} >Try Again</button>
          &nbsp;
          <button className="btn btn-lg btn-primary" onClick={this.handleNextClick} >Next ⏎</button>
        </div>
      );
    } else {
      return (
        <div className="jumbotron text-center">
          <h1>📛 Try Again</h1>
          <p className="lead">{`Your correct rate is ${parseInt(this.props.correctRate)}%, needs to be at least ${MINIMUM_CORRECT_RATE}%`}</p>
          <button className="btn btn-lg btn-primary" onClick={this.handleTryAgain} >Try Again ⏎</button>
        </div>
      );
    }
  }
}

export default ExerciseResult;
