import { going } from '../solution';

describe('Going to zero or to infinity?', () => {
  test('Simple test', () => {
    expect(going(1)).toBe(1);
  });

  test('Test with zero', () => {
    expect(going(0)).toBe(1);
  });

  test('Some values', () => {
    expect(going(5)).toBe(1.275);
    expect(going(6)).toBe(1.2125);
    expect(going(7)).toBe(1.173214);
  });

  test('Not expecting NaN', () => {
    const randomValuesList = Array.from({ length: 10 }).map(() =>
      Math.floor(Math.random() * 100 + 1)
    );
    randomValuesList.forEach((item) => {
      expect(going(item)).not.toBeNaN();
    });
  });
});
