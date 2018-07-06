import React from 'react';
import { isExercisePassed, MINIMUM_CORRECT_RATE } from './arrayConverter';
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
        <div className="jumbotron text-center">
          <h1>✅ Good!</h1>
          <p className="lead">{`Correct rate is ${parseInt(this.props.correctRate)}%`}</p>
          <button className="btn btn-lg btn-outline-primary" onClick={this.handleTryAgain} >Try Again</button>
          &nbsp;
          <Link className="btn btn-lg btn-primary" to={this.props.isLast ? `/lessons/${this.props.match.params.lessonId}` : `/lessons/${this.props.match.params.lessonId}/${this.props.match.params.exerciseNumber}`} >Next ⏎</Link>
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

export default TaskResult;
