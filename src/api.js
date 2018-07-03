import axios from 'axios';

class Api {

  constructor(token, userId) {
    this.token = token;
    this.userId = userId;
  }

  api() {
    return axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 1000,
        headers: {'Authorization': this.token}
      })
  } 

  getUser() {
    return this.api().get(`/AppUsers/${this.userId}`);
  } 

  getLessons() {
    return this.api().get('/Lessons');
  }
  
  getLessonExercises(id) {
    return this.api().get(`/Lessons/${id}/exercises`);
  }

  getLessonLog(lessonId) {
    return this.api()
      .get(`/AppUsers/${this.userId}/lessonLogs?filter[where][lessonId]=${lessonId}`)
      .catch(err => {
        console.log('hey', err);
        return { data: [] };
      });
  }

  getLessonExercisesAndLog(lessonId, cb) {
    axios.all([this.getLessonExercises(lessonId), this.getLessonLog(lessonId)])
      .then(axios.spread(function (exercicesResponse, lessonLogResponse) {
          const logData = lessonLogResponse.data.length ? lessonLogResponse.data[0].correctRate : null;
          cb(exercicesResponse.data, logData);
        }));
  }
}

 export default Api; 
