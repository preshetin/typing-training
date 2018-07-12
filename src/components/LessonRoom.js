import React from 'react';
import Api from '../api';
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
    console.log('LessonRoom componentDidMount');
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.getLessonExercisesAndLog(this.props.match.params.lessonId, (exercises, lessonLog) => {
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
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.storeOrUpdateLessonLog(st.lessonLog).then(res => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessonLog = res.data;
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
      <div class="row justify-content-md-center">
        <div className="col-md-9">
          <TaskPlayground
            {...this.props}
            task={currentExercise.task}
            onSaveLog={this.handleSaveLog} 
            onNext={this.prepareNextExercise}
            isLast={this.state.exercises[this.state.exercises.length - 1].id === currentExercise.id}
          />
        </div>
        <div class="w-100"></div>
        <div className="col-md-9">
          <ExerciseNav
            exercises={this.state.exercises}
            activeIndex={parseInt(this.props.match.params.exerciseNumber) - 1}
            lessonLog={this.state.lessonLog}
            isLoggedIn={this.props.isLoggedIn}
          />
        </div>
      </div>
    );
  }
}

export default LessonRoom;
