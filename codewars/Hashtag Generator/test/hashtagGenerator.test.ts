import { generateHashtag } from '../solution';

describe('Testing Hashtag Generator', () => {
  test('Empty string', () => {
    expect(generateHashtag('')).toBeFalsy();
  });

  test('Only spaces string', () => {
    expect(generateHashtag(' '.repeat(200))).toBeFalsy();
  });

  test('Basic string', () => {
    expect(generateHashtag('Do We have A Hashtag')).toBe('#DoWeHaveAHashtag');
  });

  test('Only word string', () => {
    expect(generateHashtag('Codewars')).toBe('#Codewars');
  });

  test('Function need to remove spaces', () => {
    expect(generateHashtag('Codewars Is Nice')).toBe('#CodewarsIsNice');
  });

  test('Function must capitilize first letters of words', () => {
    expect(generateHashtag('Codewars is nice')).toBe('#CodewarsIsNice');
  });

  test('Long spaces', () => {
    expect(generateHashtag('code' + ' '.repeat(140) + 'wars')).toBe(
      '#CodeWars'
    );
  });

  test('Long word', () => {
    expect(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
      )
    ).toBeFalsy();
  });

  test('Maximum Length string', () => {
    expect(generateHashtag('a'.repeat(139))).toBe('#' + 'A' + 'a'.repeat(138));
  });

  test('Overflow of maximum length', () => {
    expect(generateHashtag('a'.repeat(140))).toBeFalsy();
  });
});
