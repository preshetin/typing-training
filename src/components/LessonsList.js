import React from 'react';
import LessonCard from './LessonCard';

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

  render() {
    return (
      <div className="row justify-content-md-center">
          <div className="card-deck text-center">
            {this.props.lessons.map(lesson => (
              <div key={lesson.id} className="col-md-6" style={{ marginBottom: "25px" }}>
                <LessonCard
                  lesson={lesson}
                  completeRate={this.getCorrectRateForLesson(lesson)}
                />
              </div>
            ))}
          </div>
      </div>
    );
  }
}

export default LessonsList;
