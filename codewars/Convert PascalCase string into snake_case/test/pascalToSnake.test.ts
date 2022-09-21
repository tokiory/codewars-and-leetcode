import toUnderscore from "../solution";

describe('Testing pacscal case transforming to snake case', () => {

  test('TestController word', () => {
    const WORD = 'TestController';
    const EXPECTED_WORD = 'test_controller';
    expect(toUnderscore(WORD)).toBe(EXPECTED_WORD);
  });

  test('ThisIsABeautifulDay word', () => {
    const WORD = 'ThisIsABeautifulDay';
    const EXPECTED_WORD = 'this_is_a_beautiful_day';
    expect(toUnderscore(WORD)).toBe(EXPECTED_WORD);
  });

  test('MoviesAndBooks word', () => {
    const WORD = 'MoviesAndBooks';
    const EXPECTED_WORD = 'movies_and_books';
    expect(toUnderscore(WORD)).toBe(EXPECTED_WORD);
  });

  test('Digit', () => {
    const WORD = 1;
    const EXPECTED_WORD = '1';
    expect(toUnderscore(WORD)).toBe(EXPECTED_WORD);
  });
});