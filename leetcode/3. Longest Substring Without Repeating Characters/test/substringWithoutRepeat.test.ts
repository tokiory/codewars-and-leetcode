import LONG_STRING from './longExample';
import lengthOfLongestSubstring, {getSubstrings, isCharactersUnique} from '../solution';

describe('Testing substrings', () => {
  test('Simple string', () => {
    expect(getSubstrings('abc', 2)).toStrictEqual(['ab', 'bc']);
  });

  test('Medium length string', () => {
    expect(getSubstrings('abbbcccd', 4)).toStrictEqual(['abbb', 'bbbc', 'bbcc', 'bccc', 'cccd']);
  });

  test('Empty string', () => {
    expect(getSubstrings('', 1)).toStrictEqual(['']);
  });

  test('String with one value', () => {
    expect(getSubstrings('a', 1)).toStrictEqual(['a']);
  });

});

describe('Testing function for searching is character unique', () => {
  test('Not unique string', () => {
    expect(isCharactersUnique('ajdflbba')).toBe(false);
  });
  test('Unique string', () => {
    expect(isCharactersUnique('a$b!c@d&e*fg')).toBe(true);
  });
});

describe('Testing length of biggest unique substring', () => {

  test('Simple string', () => {
    expect(lengthOfLongestSubstring('abcabcde')).toBe(5);
  })

  test('Second substring', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  })

  test('Big string', () => {
    expect(lengthOfLongestSubstring(LONG_STRING)).toBe(95);
  });
})