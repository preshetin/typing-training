import React, { Component, Fragment } from 'react';
import Api from './api';
import { Link } from 'react-router-dom';
import Lesson from './Lesson';

class LessonsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.getLessons().then(res => this.setState({ lessons: res.data })); 
  }

  render() {
    return (
      <div className="card-deck text-center">
        {this.state.lessons.map(lesson => <Lesson key={lesson.id} lesson={lesson} />)}
      </div>
    )
  }
}

export default LessonsList;
