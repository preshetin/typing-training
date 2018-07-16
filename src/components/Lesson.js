import React from 'react';
import LessonComplete from './LessonComplete'; 
import { db } from '../firebase';
import { Redirect } from 'react-router-dom';
import * as utils from '../utils';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: null, 
      lessonLog: null
    }
  }

  componentDidMount() {
    db.getExercisesAndLog(this.props.authUser, this.props.match.params.lessonId, (exercises, lessonLog) => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.exercises = utils.prepareExercises(exercises);
      st.lessonLog = lessonLog ?
        lessonLog : utils.generateEmptyLog(this.props.match.params.lessonId);
      this.setState(st);
    });
  }

  upcomingLessonNumber() {
    let upcomingLessonNumber = 1;
    var BreakException = {};
    try {
      this.state.exercises.forEach((ex, index) => {
        if (this.state.lessonLog.logData.filter(lD => lD.id === ex.id).length === 0) {
          upcomingLessonNumber = index + 1;
          throw BreakException;
        } 
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
    return upcomingLessonNumber;
  }

  render() {
    const lessonId = this.props.match.params.lessonId; 

    if (this.state.exercises === null) {
      return `Loading lesson ${lessonId}`;
    }

    if (this.state.lessonLog.logData.length === this.state.exercises.length) {
      const exercisesWithLogs = this.state.exercises.map(ex => {
        ex.stat = this.state.lessonLog.logData.find(ld => ld.id === ex.id);
        return ex; 
      });
      return <LessonComplete {...this.props} exercisesWithLogs={exercisesWithLogs} />;
    }

    return <Redirect to={`/lessons/${lessonId}/${this.upcomingLessonNumber()}`} />

  }
}

export default Lesson;
