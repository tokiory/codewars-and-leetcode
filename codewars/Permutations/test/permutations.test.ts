import { permutations } from "../solution";

describe('Testing permutations', () => {
  test('Empty array', () => {
    expect(permutations('')).toStrictEqual(['']);
  });

  test('One letter', () => {
    expect(permutations('a')).toStrictEqual(['a']);
  });

  test('Two letters', () => {
    expect(permutations('ab')).toStrictEqual(['ab', 'ba']);
  });

  test('Four letters', () => {
    expect(permutations('aabb')).toStrictEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});