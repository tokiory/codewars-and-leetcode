import { checkInclusion } from "../solution";

describe('Testing permutations in string', () => {
  test('Basic test', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });

  test('Failed test in leetcode', () => {
    expect(checkInclusion("prosperity", "properties")).toBe(false);
  });
});