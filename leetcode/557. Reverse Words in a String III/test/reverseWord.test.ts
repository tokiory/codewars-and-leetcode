import reverseWords from '../solution';

describe('Reverse words in an arry', () => {
  test("Let's take LeetCode contest", () => {
    const INPUT_STRING = "Let's take LeetCode contest";
    const EXPECTED_OUTPUT = "s'teL ekat edoCteeL tsetnoc";
    expect(reverseWords(INPUT_STRING)).toBe(EXPECTED_OUTPUT);
  });

  test("God Ding", () => {
    const INPUT_STRING = 'God Ding';
    const EXPECTED_OUTPUT = 'doG gniD';
    expect(reverseWords(INPUT_STRING)).toBe(EXPECTED_OUTPUT);
  });
})