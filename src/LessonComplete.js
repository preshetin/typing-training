import React from 'react';
import { Link } from 'react-router-dom';

const LessonComplete = props => {

  const handleBackToLessons = () => {
    props.history.push('/');
  }

  const handleOnceAgain = () => {
    props.history.push('/');
  }

  return (
    <div className="jumbotron text-center">
      <h1> 🎃 Lesson completed</h1>
      <p className="lead">Good job</p>
      <ul>
        {props.exercisesWithLogs.map((ex, index) => <li>Exercise #{index + 1}: {parseInt(ex.stat.correctRate)}% correct rate</li>)}
      </ul>
      <Link className="btn btn-lg btn-outline-primary" to={`/lessons/${props.match.params.lessonId}/1`} >Repeat lesson</Link> 
      &nbsp;
      <Link className="btn btn-lg btn-primary" to={`/`} >Back to Lessons ⏎</Link> 
    </div>
  );  
}

export default LessonComplete;
