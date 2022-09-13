import solution from '../solution';
describe("Searching insert position, if element doesn't exist", () => {
  test('Basic leetcode test with founded value', () => {
    const TEST_LIST = [1, 3, 5, 6];
    expect(solution(TEST_LIST, 5)).toBe(2);
  }, 5000);

  test('Basic leetcode test with approx value', () => {
    const TEST_LIST = [1, 3, 5, 6];
    expect(solution(TEST_LIST, 2)).toBe(1);
  }, 5000);
});
