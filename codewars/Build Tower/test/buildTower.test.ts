import { towerBuilder } from '../solution';

describe('Testing Build Tower Function', () => {
  test('Build 3 floors', () => {
    expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****']);
  });

  test('Build 0 floors', () => {
    expect(towerBuilder(0)).toEqual([]);
  });

  test('Build 2 floors', () => {
    expect(towerBuilder(2)).toEqual([' * ', '***']);
  });

  test('Build 1 floor', () => {
    expect(towerBuilder(1)).toEqual(['*']);
  });

  test('Testing the length of array', () => {
    expect(towerBuilder(50).length).toBe(50);
  });

  test('Testing last floor', () => {
    const EXPECTED_FLOORS = 30;
    expect(towerBuilder(EXPECTED_FLOORS)[EXPECTED_FLOORS - 1]).toBe(
      '*'.repeat(EXPECTED_FLOORS * 2 - 1)
    );
  });
});
