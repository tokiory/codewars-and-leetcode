import MORSE_CODE from './morseCode.define';
import BIT_DICTIONARY from './bitsDictionary.define';
const MORSE_CODE_KEYS = Object.keys(MORSE_CODE);
const BIT_DICTIONARY_KEYS = Object.keys(BIT_DICTIONARY);
const BINARY_MORSE_SPACE = '00';
const BINARY_CHARACTER_SPACE = BINARY_MORSE_SPACE.repeat(3);
const BINARY_WORD_SPACE = BINARY_CHARACTER_SPACE.repeat(2);
const WORD_SPACER = '   ';
const CHACTER_SPACER = ' ';

export const decodeBits = (bits: string): string => {

  // Find start - ✅
  // Split words- ✅
  // Split letter - ✅
  // Get characters of letter - ✅
  // Transform binary character into morse code - ✅
  // Join characters into one letter via '' - ✅
  // Join characters into words via ' ' - ✅
  // Join words into sentence via '_' - ✅
  // Return string - ✅

  // Find first bit
  const words = splitBinaryWords(bits);

  const output = words.map(word => {
    const letters = splitBinaryLetters(word);
    const transformedLetters = letters.map(binaryMorseSequence => {
      const binaryMorseCharacters = splitBinaryMorse(binaryMorseSequence);
      return binaryMorseCharacters.map(binaryMorse => {
        if (BIT_DICTIONARY_KEYS.includes(binaryMorse)) {
          return BIT_DICTIONARY[binaryMorse as keyof typeof BIT_DICTIONARY];
        }
        return '';

      }).join('');
    });
    return transformedLetters.join(CHACTER_SPACER);
  });

  return output.join(WORD_SPACER);
};

export const decodeMorse = (morseCode: string) => {
  const words = morseCode.split(WORD_SPACER);
  const translatedWords = words.map((word) => {
    const letters = word.split(CHACTER_SPACER);
    const letterTranslations = letters.map((letter) => {
      if (MORSE_CODE_KEYS.includes(letter)) {
        return MORSE_CODE[letter as keyof typeof MORSE_CODE];
      }
      return '';
    });

    return letterTranslations.join('');
  });
  return translatedWords.join(CHACTER_SPACER);
};


/**
 * Splits binary morse code into words array
 * @param binary Binary morse code
 * @returns Words represented in binary code
 */
function splitBinaryWords(binary: string): string[] {
  return binary.slice(binary.search('1')).split(BINARY_WORD_SPACE);
}

function splitBinaryLetters(word: string): string[] {
  return word.split(BINARY_CHARACTER_SPACE);
}

function splitBinaryMorse(character: string): string[] {
  return character.split(BINARY_MORSE_SPACE);
}