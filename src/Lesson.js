import React, { Component, Fragment } from 'react';

const Lesson = (props) => {
  return (
        <div class="card mb-4 box-shadow">
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{ props.lesson.title } </h1>
            { props.lesson.subtitle }
            <button type="button" class="btn btn-lg btn-block btn-primary">Start</button>
          </div>
        </div>
  )
}

export default Lesson;
