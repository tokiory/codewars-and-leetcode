import { Vector } from '../solution';
describe('Vector tests', () => {
  const firstVector = new Vector([1,1,1]);
  const secondVector = new Vector([1,2,3]);

  test('toString function', () => {
    expect(firstVector.toString()).toBe('(1,1,1)');
    expect(secondVector.toString()).toBe('(1,2,3)');
  });

  test('Addition', () => {
    const sumVector = firstVector.add(secondVector);
    expect(sumVector.toString()).toBe('(2,3,4)');
  });

  test('Subtraction', () => {
    const substractionVector = firstVector.subtract(secondVector);
    expect(substractionVector.toString()).toBe('(0,-1,-2)');
  });

  test('Normal function', () => {
    expect(firstVector.norm()).toBe(Math.sqrt(3));
  });

  test('Dot', () => {
    expect(firstVector.dot(secondVector)).toBe(6);
  });

  test('Equality', () => {
    expect(firstVector.equals(secondVector)).toBeFalsy();
  });
});