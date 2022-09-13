import { G964 } from '../solution';

describe('Testing solution of "Playing with digits"', () => {
  test('Testing with basic key [114, 3]', () => {
    expect(G964.digPow(114, 3)).toBe(9);
  });

  test('Testing with basic keys [89, 1]', () => {
    expect(G964.digPow(89, 1)).toBe(1);
  });

  test('Testing with basic keys [91, 1]', () => {
    expect(G964.digPow(91, 1)).toBe(-1);
  });
});
