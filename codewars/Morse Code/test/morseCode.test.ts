import { decodeMorse } from '../solution';

describe('Morse Code test', () => {
  let MORSE_CODE: string;
  let EXPECTED_WORD: string;

  test('Testing word "Hello, World', () => {
    MORSE_CODE = '.... . .-.. .-.. --- --..--  .-- --- .-. .-.. -..';
    EXPECTED_WORD = 'HELLO, WORLD';

    expect(decodeMorse(MORSE_CODE)).toBe(EXPECTED_WORD);
  });

  test('Testing word "Hello from Miami Beach"', () => {
    MORSE_CODE =
      '.... . .-.. .-.. ---  ..-. .-. --- --  -- .. .- -- ..  -... . .- -.-. ....';
    EXPECTED_WORD = 'HELLO FROM MIAMI BEACH';

    expect(decodeMorse(MORSE_CODE)).toBe(EXPECTED_WORD);
  });
});
