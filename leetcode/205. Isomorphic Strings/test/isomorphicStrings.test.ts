import isIsomorphic from '../solution';

describe('Checking if strings are isomorphic', () => {
  test("String 'egg' and 'add'", () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
  });

  test("String 'paper' and 'title'", () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
  });

  test("String 'for' and 'bar'", () => {
    expect(isIsomorphic('foo', 'bar')).not.toBeTruthy();
  });

  test("String '' and ''", () => {
    expect(isIsomorphic('', '')).toBeTruthy();
  });

  test("String 'legs' and 'arms'", () => {
    expect(isIsomorphic('legs', 'arms')).toBeTruthy();
  });
});
