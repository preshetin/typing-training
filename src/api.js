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
    return this.api().get('/Lessons?filter={%22counts%22:%22exercises%22}');
  }
  
  getUserLessonLogs() {
    return this.api().get(`/AppUsers/${this.userId}/lessonLogs`)
             .catch(err => {
               return { data: [] };
             });
  }
  
  getLessonExercises(id) {
    return this.api().get(`/Lessons/${id}/exercises`);
  }

  getLessonLog(lessonId) {
    return this.api()
      .get(`/AppUsers/${this.userId}/lessonLogs?filter[where][lessonId]=${lessonId}`)
      .catch(err => {
        return { data: [] };
      });
  }

  getLessonExercisesAndLog(lessonId, cb) {
    axios.all([this.getLessonExercises(lessonId), this.getLessonLog(lessonId)])
      .then(axios.spread(function (exercicesResponse, lessonLogResponse) {
          const logData = lessonLogResponse.data.length ? lessonLogResponse.data[0] : null;
          cb(exercicesResponse.data, logData);
        }));
  }

  storeOrUpdateLessonLog(lessonLog) {
    if (lessonLog.hasOwnProperty('id')) {
      return this.api()
        .put(`/AppUsers/${this.userId}/lessonLogs/${lessonLog.id}`, lessonLog);
    } else {
      return this.api().post(`/AppUsers/${this.userId}/lessonLogs`, lessonLog); 
    }
  }
}

 export default Api; 
