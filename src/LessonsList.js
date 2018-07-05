import React from 'react';
import Api from './api';
import Lesson from './Lesson';

class LessonsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      lessonLogs: []
    }
  }

  getCorrectRateForLesson(lesson) {
    const logsArr = this.state.lessonLogs.filter(l => l.lessonId === lesson.id);
    if (logsArr.length) {
      return logsArr[0].logData.length / lesson.exercisesCount * 100;
    }
    return 0;
  }

  componentDidMount() {
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.getLessons().then(res => this.setState({ lessons: res.data })); 
    api.getUserLessonLogs().then(res => this.setState({ lessonLogs: res.data }));
  }

  render() {
    return (
      <div className="card-deck text-center">
        {this.state.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            lesson={lesson}
            completeRate={this.getCorrectRateForLesson(lesson)}
          />
        ))}
      </div>
    )
  }
}

export default LessonsList;
