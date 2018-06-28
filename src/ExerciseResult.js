import React from 'react';
import { isExercisePassed, MINIMUM_CORRECT_RATE } from './arrayConverter';

const ExerciseResult = (props) => {
  
  const handleTryAgain = () => {
    props.onTryAgain();
  }

  const handleNextClick = (e) => {
    //console.log(e.target);
    props.onNextExercice();
  }
  
  if (isExercisePassed(props.correctRate) ) {
    return (
      <div className="jumbotron text-center">
        <h1>✅ Good!</h1>
        <p className="lead">{`Correct rate is ${parseInt(props.correctRate)}%`}</p>
        <button className="btn btn-lg btn-outline-primary" onClick={handleTryAgain} >Try Again</button>
        &nbsp;
        <button className="btn btn-lg btn-primary" onClick={handleNextClick} >Next ⏎</button>
      </div>
    );
  } else {
    return (
      <div className="jumbotron text-center">
        <h1>📛 Try Again</h1>
        <p className="lead">{`Your correct rate is ${parseInt(props.correctRate)}%, needs to be at least ${MINIMUM_CORRECT_RATE}%`}</p>
        <button className="btn btn-lg btn-primary" onClick={handleTryAgain} >Try Again ⏎</button>
      </div>
    );
  }
}

export default ExerciseResult;
