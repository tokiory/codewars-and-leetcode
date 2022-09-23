import maxSum from '../solution';

describe('The Maximum sum value of range', () => {
  test('One range', () => {
    expect(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]])).toBe(5);
  });

  test('Two ranges', () => {
    expect(
      maxSum(
        [1, -2, 3, 4, -5, -4, 3, 2, 1],
        [
          [1, 4],
          [2, 5],
        ]
      )
    ).toBe(0);
  });

  test('Three ranges', () => {
    expect(
      maxSum(
        [1, -2, 3, 4, -5, -4, 3, 2, 1],
        [
          [1, 3],
          [0, 4],
          [6, 8],
        ]
      )
    ).toBe(6);
  });
});