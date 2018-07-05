import React from 'react';
import Api from './api';
import ExercisePlayground from './ExercisePlayground';
import ExerciseNav from './ExerciseNav';
import * as utils from './utils';

class TrainingRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lesson: null,
      exercises: null
    }
  }

  componentDidMount() {
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
    this.props.history.push(`/lessons/${this.props.match.params.lessonId}/${parseInt(this.props.match.params.exerciseNumber) + 1}`);
  }

  render() {
    if (this.state.exercises == null) {
      return "Loading...";
    }

    return (
      <div>
        <ExercisePlayground
          exercise={this.state.exercises[parseInt(this.props.match.params.exerciseNumber) - 1]}
          onSaveLog={this.handleSaveLog} 
          onNext={this.prepareNextExercise}
        />
        <div className="row">
          <div className="col">
            <ExerciseNav
              exercises={this.state.exercises}
              activeIndex={parseInt(this.props.match.params.exerciseNumber) - 1}
              lessonLog={this.state.lessonLog}
              onChangeExercise={this.prepareExercise}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingRoom;
