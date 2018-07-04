import React from 'react';
import Api from './api';
import ExercisePlayground from './ExercisePlayground';
import ExerciseNav from './ExerciseNav';
import { prepareExercises } from './utils';

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
    api.getLessonExercisesAndLog(this.props.match.params.lessonId, (exersices, lessonLog) => {
      let st = JSON.parse(JSON.stringify(this.state));
      st.exercises = prepareExercises(exersices);
      st.lessonLog = lessonLog;
      this.setState(st);
    });
  }

  handleFinish(correctRate) {
    console.log('finished', correctRate);
  }

  prepareNextExercise = () => {
    let st = JSON.parse(JSON.stringify(this.state));
    st.exerciseIndex++;
    this.setState(st);
  }

  prepareTryAgain = () => {
  }

  render() {
    if (this.state.exercises == null) {
      return "Loading...";
    }

    return (
      <div>
        <ExercisePlayground
          exercise={this.state.exercises[this.state.exerciseIndex]}
          onFinish={this.handleFinish} 
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
