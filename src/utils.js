const prepareExercises = (exerciseString) => {
  return exerciseString.map(exercise => {
      exercise.task = convertStringToArray(exercise.task);
      return exercise;
    });
} 

const generateEmptyLog = (lessonId) => {
  return { lessonId, logData: [] };
}

const addExerciseDataToLessonLog = (exerciseLogData, lessonLog) => {
  let { logData } = lessonLog;
  if (logData.filter(d => d.id === exerciseLogData.id).length) {
    logData = lessonLog.logData.map(d => (
      d.id === exerciseLogData.id ? exerciseLogData : d
    ));
  } else {
    logData.push(exerciseLogData);
  }
  lessonLog.logData = logData;
  return lessonLog;
}

const convertStringToArray = (str) => {
  return str.split("\n");
}

export {
  prepareExercises,
  addExerciseDataToLessonLog,
  generateEmptyLog,
  convertStringToArray
}

