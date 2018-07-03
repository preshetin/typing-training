import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Lesson = (props) => {
  return (
        <div className="card box-shadow">
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{ props.lesson.title } </h1>
            { props.lesson.subtitle }
            <Link to={`/lessons/${props.lesson.id}`} className="btn btn-lg btn-block btn-primary">Start</Link>
          </div>
        </div>
  )
}

export default Lesson;
