import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Lesson from './Lesson';

class LessonsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        {
          title: "fj",
          subtitle: "f & j letters"
        },
        {
          title: "kd",
          subtitle: "k & d letters"
        },
        {
          title: "sl",
          subtitle: "s & l letters"
        },
        {
          title: "a;",
          subtitle: "a & ; letters"
        }
      ]
    }
  }

  render() {
    return (
      <div className="card-deck text-center">
        {this.state.lessons.map(lesson => <Lesson lesson={lesson} />)}
      </div>
    )
  }
}

export default LessonsList;
