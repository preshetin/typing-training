import * as aC from './arrayConverter';

const state =  {
  "exercices":[
    ["ff","fff"],
    ["jjj"],
    ["fff","ff","jfj","jjj"]
  ],
  "chars":[
    [{"symbol":"f","typeStatus":"correct"},{"symbol":"f","typeStatus":"correct"},{"symbol":" ","typeStatus":"correct"}],
    [{"symbol":"f","typeStatus":"correct"},{"symbol":"f","typeStatus":"correct"},{"symbol":"f","typeStatus":"correct"},{"symbol":" ","typeStatus":null}]
  ],
  "currentIndex":5,
  "exerciseIndex":0,
  "currentSymbol":"f"
};

test('correctRate of all correct chars exept last should be 100', () => {
  expect(aC.correctRate(state.chars)).toBe(100);
});

