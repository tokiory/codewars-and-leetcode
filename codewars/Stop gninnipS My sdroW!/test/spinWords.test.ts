import { spinWords } from '../solution';

describe('Spinning words with length greater or equal than 5', () => {
  test('Basic codewars test', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });

  test('Empty words', () => {
    expect(spinWords('')).toBe('');
  });

  test('All words length less than 5', () => {
    expect(spinWords('hi my name is Kyle')).toBe('hi my name is Kyle');
  });
});
