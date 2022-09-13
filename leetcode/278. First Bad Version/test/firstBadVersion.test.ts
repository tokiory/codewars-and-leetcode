import firstBadVersion from '../solution';
import { isBadVersion } from '../isBadVersion';

function getSolution(badVersion: number, lastVersion: number): number {
  if (lastVersion < badVersion) {
    throw new Error('Last version must be greater or equal than bad version');
  }

  const callback = isBadVersion(badVersion);
  const solution = firstBadVersion(callback);
  return solution(lastVersion);
}

describe('First bad version', () => {
  test('When first version is bad', () => {
    const BAD_VERSION = 1;
    const LAST_VERSION = 1;
    expect(getSolution(BAD_VERSION, LAST_VERSION)).toBe(BAD_VERSION);
  });

  test('With not even numbers of last version', () => {
    const BAD_VERSION = 2;
    const LAST_VERSION = 3;
    expect(getSolution(BAD_VERSION, LAST_VERSION)).toBe(BAD_VERSION);
  });

  test('Some big numbers', () => {
    const BAD_VERSION = 1702766719;
    const LAST_VERSION = 2126753390;
    expect(getSolution(BAD_VERSION, LAST_VERSION)).toBe(BAD_VERSION);
  });
});
