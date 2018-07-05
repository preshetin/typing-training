import React from 'react';
import Api from './api';
import Lesson from './Lesson';

class LessonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  getCorrectRateForLesson(lesson) {
    const logsArr = this.props.lessonLogs.filter(l => l.lessonId === lesson.id);
    if (logsArr.length) {
      return logsArr[0].logData.length / lesson.exercisesCount * 100;
    }
    return 0;
  }

  componentDidMount() {
    console.log('LessonsList componentDidMount');
    this.props.onMount();
  }

  render() {
    console.log('LessonsList render');
    return (
      <div className="card-deck text-center">
        {this.props.lessons.map(lesson => (
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
