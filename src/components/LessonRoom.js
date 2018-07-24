import React from 'react';
import IsLoggedInAlert from './IsLoggedInAlert';
import { firebase, db } from '../firebase';
import TaskPlayground from './TaskPlayground';
import ExerciseNav from './ExerciseNav';
import * as utils from '../utils';

class LessonRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lesson: null,
      exercises: null
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

  handleSaveLog = (correctRate) => {
    const lessonId = this.props.match.params.lessonId;
    let st = JSON.parse(JSON.stringify(this.state));
    st.lessonLog = utils.addExerciseDataToLessonLog({
      correctRate,
      id: this.state.exercises[parseInt(this.props.match.params.exerciseNumber) - 1].id
    }, st.lessonLog);
    db.storeOrUpdateLessonLog(this.props.authUser, st.lessonLog).then(lessonLog => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessonLog = lessonLog;
      this.setState(st);
    })
    
  }

  prepareNextExercise = () => {
    const currentExercise = this.state.exercises[parseInt(this.props.match.params.exerciseNumber) - 1]; 
    if (this.state.exercises[this.state.exercises.length - 1].id === currentExercise.id) {
      this.props.history.push(`/lessons/${this.props.match.params.lessonId}`);
    } else {
      this.props.history.push(`/lessons/${this.props.match.params.lessonId}/${parseInt(this.props.match.params.exerciseNumber) + 1}`);
    }
  }

  render() {
    if (this.state.exercises == null) {
      return "Loading...";
    }

    const currentExercise = this.state.exercises[parseInt(this.props.match.params.exerciseNumber) - 1]; 

    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-md-12" >
              <IsLoggedInAlert authUser={this.props.authUser} />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-9" style={{ minWidth: "600px" }}>
            <TaskPlayground
              {...this.props}
              task={currentExercise.task}
              intro_text={currentExercise.intro_text}
              onSaveLog={this.handleSaveLog} 
              onNext={this.prepareNextExercise}
              key={currentExercise.id}
              isLast={this.state.exercises[this.state.exercises.length - 1].id === currentExercise.id}
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-9">
            <ExerciseNav
              exercises={this.state.exercises}
              activeIndex={parseInt(this.props.match.params.exerciseNumber) - 1}
              lessonLog={this.state.lessonLog}
              lessonId={this.props.match.params.lessonId}
              isLoggedIn={this.props.authUser ? true : false}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LessonRoom;
