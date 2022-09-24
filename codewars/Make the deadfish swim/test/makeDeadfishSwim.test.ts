import deadfishParse from '../solution';
describe('Make the deadfish swim', () => {
  test('Fully valid input', () => {
    expect(deadfishParse('iiisdoso')).toStrictEqual([8,64]);
  });

  test('Some characters are invalid', () => {
    expect(deadfishParse('iiisxxxdoso')).toStrictEqual([8, 64]);
  });
});