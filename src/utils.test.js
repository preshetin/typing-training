import * as utils from './utils';

const backendStr = "fffff\nfff jjj\njjj\nfjfj fjfj";

it('sptits string by new line', () => {
  expect(utils.convertStringToArray(backendStr).length).toBe(4);
});


const exercises = [
  {"title":"Fff it","task":["fffff"],"id":1,"lessonId":1},
  {"title":"Jjj it","task":["jjjjjjj"],"id":2,"lessonId":1}
];

const correctEmptyLog = {
  lessonId: 1,
  logData: []
};

const exerciseLogData = { id: 1, correctRate: 90 };

const lessonLog = {
  lessonId: 1,
  logData: [ { id: 2, correctRate: 85 } ]
}

it('generates empty log', () => {
  expect(JSON.stringify(utils.generateEmptyLog(1)))
   .toBe(JSON.stringify(correctEmptyLog));
});
