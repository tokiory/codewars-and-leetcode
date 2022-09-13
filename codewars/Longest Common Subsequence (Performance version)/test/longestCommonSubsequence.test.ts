import { lcs } from '../solution';

describe('Longest Common Subsequence', () => {
  test('Empty subsequence and searching string', () => {
    expect(lcs('', '')).toBe('');
  });

  test('Empty searching string', () => {
    expect(lcs('abc', '')).toBe('');
  });

  test('Empty subsequence', () => {
    expect(lcs('', 'abc')).toBe('');
  });

  test('No subsequences', () => {
    expect(lcs('a', 'b')).toBe('');
  });

  test('One subsequence', () => {
    expect(lcs('a', 'a')).toBe('a');
  });

  test('Two letters in subsequence', () => {
    expect(lcs('abc', 'ac')).toBe('ac');
  });

  test('First letters subsequence', () => {
    expect(lcs('abcdef', 'abc')).toBe('abc');
  });

  test('Middle subsequence', () => {
    expect(lcs('abcdef', 'acf')).toBe('acf');
  });

  test('Middle subsequence', () => {
    expect(lcs('anothertest', 'notatest')).toBe('nottest');
  });

  test('Middle subsequence', () => {
    expect(lcs('132535365', '123456789')).toBe('12356');
  });

  test('Big subsequence', () => {
    expect(lcs('nothardlythefinaltest', 'zzzfinallyzzz')).toBe('final');
  });

  test('Big subsequence', () => {
    expect(lcs('abcdefghijklmnopq', 'apcdefghijklmnobq')).toBe(
      'acdefghijklmnoq'
    );
  });
});
