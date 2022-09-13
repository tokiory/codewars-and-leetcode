import isSubsequence from '../solution';

describe('Check if string is subsequence of the second string', () => {
  test("Strings 'abc' and 'abc'", () => {
    expect(isSubsequence('abc', 'abc')).toBeTruthy();
  });

  test("Strings 'abc' and 'ahbgdc'", () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
  });

  test("Strings 'axc' and 'ahbgdc'", () => {
    expect(isSubsequence('axc', 'ahbgdc')).not.toBeTruthy();
  });

  test("Strings 'twn' and 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn'", () => {
    expect(
      isSubsequence(
        'twn',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn'
      )
    ).toBeTruthy();
  });
});
