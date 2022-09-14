import { twoSum } from '../solution';

describe('Testing two sum II', () => {
  test('Basic test', () => {
    expect(twoSum([1, 2, 4], 3)).toStrictEqual([1, 2]);
  });

  test('Failed leetcode test', () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test('Array with not unique values', () => {
    expect(twoSum([1, 3, 3, 4], 7)).toStrictEqual([2, 4]);
  });
});
