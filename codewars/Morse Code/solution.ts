import { MORSE_CODE } from "./preloaded";

/**
 * Tranlate from morse code into english
 * @param morseCode Morse code string
 * @returns Decoded morse string
 */
export function decodeMorse(morseCode: string): string {

    // Morse code words
    const morseCodeWords = splitMorseIntoWords(morseCode);

    const messageWords = morseCodeWords.map(morseWord => {
        return translateMorseWord(morseWord);
    });

    return messageWords.join(' ').trim();
}


/**
 * Split morse code string into array of morse code words
 * @param morseCode String with morse code
 * @returns Array of words in morse code
 */
function splitMorseIntoWords(morseCode: string): Array<string> {
    const EXTRA_SPACE_SYMBOL = '_'
    return morseCode.replace(/\s{2,}/g, EXTRA_SPACE_SYMBOL).split(EXTRA_SPACE_SYMBOL);
}

/**
 * Translates morse code word into english
 * @param morseCodeWord Word of a morse code
 * @returns Translated word
 */
function translateMorseWord(morseCodeWord: string): string {

    // Letters of morse code
    const morseLetters = morseCodeWord.split(' ');

    // Translated letter of the word
    const translatedLetters = morseLetters.map(letter => {
        return MORSE_CODE[letter];
    });

    return translatedLetters.join('');
}