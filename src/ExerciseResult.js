import React from 'react';

const ExerciseResult = (props) => {
  const handleNextClick = (e) => {
    //console.log(e.target);
    props.onNextExercice();
  }
  return (
      <div className="jumbotron text-center">
        <h1>Congrats!</h1>
        <p className="lead">{`Correct rate is ${parseInt(props.correctRate)}%`}</p>
        <a className="btn btn-lg btn-outline-primary" href="../../components/navbar/" role="button">Try Again</a>
        &nbsp;
        <button className="btn btn-lg btn-primary" onClick={handleNextClick} >Next »</button>
      </div>
  );
  return ;
}

export default ExerciseResult;
