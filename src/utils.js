export const prepareExercises = (exerciseString) => {
  return exerciseString.map(exercise => {
      exercise.task = convertStringToArray(exercise.task);
      return exercise;
    });
} 

export const convertStringToArray = (str) => {
  return str.split("\n");
}
