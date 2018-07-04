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
      exercises: null,
      exerciseIndex: 0
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
      id: this.state.exercises[this.state.exerciseIndex].id
    }, st.lessonLog);
    const api = new Api(localStorage.getItem('token'), localStorage.getItem('userId'));
    api.storeOrUpdateLessonLog(st.lessonLog).then(res => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.lessonLog = res.data;
      this.setState(st);
    })
    
  }

  prepareNextExercise = () => {
    let st = JSON.parse(JSON.stringify(this.state));
    st.exerciseIndex++;
    this.setState(st);
  }

  render() {
    if (this.state.exercises == null) {
      return "Loading...";
    }

    return (
      <div>
        <ExercisePlayground
          exercise={this.state.exercises[this.state.exerciseIndex]}
          onSaveLog={this.handleSaveLog} 
          onNext={this.prepareNextExercise}
        />
        <div className="row">
          <div className="col">
            <ExerciseNav exercises={this.state.exercises} activeIndex={this.state.exerciseIndex} />
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingRoom;
