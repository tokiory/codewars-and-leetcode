import { doMath, sortSubsequences } from '../solution';

describe('Testing sorting subsequences', () => {
  test('Testing basic subsequence', () => {
    expect(sortSubsequences(['121f', '1232a', '1255f'])).toEqual([
      '1232a',
      '121f',
      '1255f',
    ]);
  });

  test('Testing sequence from codewars', () => {
    expect(sortSubsequences(['24z6', '1z23', 'y369', '89z', '900b'])).toEqual([
      '900b',
      'y369',
      '24z6',
      '1z23',
      '89z',
    ]);
  });
});

describe('Testing Number, Number.. Wait a Letter!', () => {
  test('One subsequence test', () => {
    expect(doMath('111a')).toBe(111);
  });

  test('Two subsequence test', () => {
    expect(doMath('111a 1b11')).toBe(222);
  });

  test('Codewars basic test', () => {
    expect(doMath('24z6 1z23 y369 89z 900b')).toBe(1414);
  });

  test('One more codewars basic test', () => {
    expect(doMath('10a 90x 14b 78u 45a 7b 34y')).toBe(60);
  });

  test('AND ONE MORE CODEWARS TEST!', () => {
    expect(doMath('24z6 1x23 y369 89a 900b')).toBe(1299);
  });

  test('Test with different cases of text', () => {
    expect(doMath('A1 h3 B2')).toBe(0);
  });
});
