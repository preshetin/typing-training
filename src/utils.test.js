import * as utils from './utils';

const backendStr = "fffff\nfff jjj\njjj\nfjfj fjfj";

it('sptits string by new line', () => {
  expect(utils.convertStringToArray(backendStr).length).toBe(4);
})
