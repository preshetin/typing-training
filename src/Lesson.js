import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompleteRate = props => {
  switch(props.rate) {
    case 0:
      return null;
    case 100:
      return <FontAwesomeIcon style={{ color: "green", fontSize: "400%" }} icon="check-circle" />;
    default:
      return (
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      );
  }
}

const Lesson = (props) => {
  return (
        <div className="card box-shadow">
          <div className="card-body">
            <CompleteRate rate={props.completeRate} />
            <h1 className="card-title pricing-card-title">{ props.lesson.title }</h1>
            <Link to={`/lessons/${props.lesson.id}/1`} className="btn btn-lg btn-block btn-primary">Start</Link>
          </div>
        </div>
  ); 
}

export default Lesson;
