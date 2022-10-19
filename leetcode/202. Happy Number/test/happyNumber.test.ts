import isHappy from '../solution';
describe('Happy numbers', () => {
  test('Leetcode example', () => {
    expect(isHappy(1)).toBe(true);
    expect(isHappy(19)).toBe(true);
    expect(isHappy(2)).toBe(false);
  });
});