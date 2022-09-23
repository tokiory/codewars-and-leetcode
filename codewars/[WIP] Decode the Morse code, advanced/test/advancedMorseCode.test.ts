import { decodeBits, decodeMorse } from '../solution';

describe('Advanced morse code', () => {
  test('Hey jude test', () => {
    const BINARY_INPUT =
      '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
    const MORSE_OUTPUT = decodeBits(BINARY_INPUT);
    const EXPECTED_TEXT = 'HEY JUDE';

    expect(MORSE_OUTPUT).toBe('.... . -.--   .--- ..- -.. .');
    expect(decodeMorse(MORSE_OUTPUT)).toBe(EXPECTED_TEXT);
  });
});
