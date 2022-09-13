import { isAValidMessage } from '../solution';

describe('Message Validator Test', function () {
  test('Correct string 3hey5hello2hi', function () {
    expect(isAValidMessage('3hey5hello2hi')).toBe(true);
  });

  test('Correct string 4code13hellocodewars', function () {
    expect(isAValidMessage('4code13hellocodewars')).toBe(true);
  });

  test('Extra number in the end', function () {
    expect(isAValidMessage('3hey5hello2hi5')).toBe(false);
  });

  test('Number follows words', function () {
    expect(isAValidMessage('code4hello5')).toBe(false);
  });

  test('Correct string with non-unical letters 1a2bb3ccc4dddd5eeeee', function () {
    expect(isAValidMessage('1a2bb3ccc4dddd5eeeee')).toBe(true);
  });

  test('Empty string', function () {
    expect(isAValidMessage('')).toBe(true);
  });
});
