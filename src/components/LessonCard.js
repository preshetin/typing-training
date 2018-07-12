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
          <div className="progress-bar bg-success" role="progressbar" style={{ "width": `${props.rate}%` }} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      );
  }
}

const LessonCard = (props) =>  (
  <div className="card box-shadow">
    <div className="card-body">
      <CompleteRate rate={props.completeRate} />
      <h1 className="card-title pricing-card-title">
        <div dangerouslySetInnerHTML={{__html: props.lesson.title}} />
      </h1>
      <Link to={`/lessons/${props.lesson.id}`} className="btn btn-lg btn-block btn-primary">Go</Link>
    </div>
  </div>
); 

export default LessonCard;
