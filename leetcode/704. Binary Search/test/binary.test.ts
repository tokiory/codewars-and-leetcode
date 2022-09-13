import binarySearch from '../solution';

describe('Testing binary search', () => {
  test('Simple case with 1 element', () => {
    expect(binarySearch([0], 0)).toBe(0);
  });

  test('Simple case with 2 elements', () => {
    expect(binarySearch([-100, 1], -100)).toBe(0);
  });

  test('Case with empty array', () => {
    expect(binarySearch([], 4)).toBe(-1);
  });

  test('LeetCode failed test', () => {
    expect(binarySearch([-1, 0, 5], -1)).toBe(0);
  });
});
