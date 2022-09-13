export function lcs(subsequence: string, searchingString: string): string {
  let result = '';
  let subsequenceLetters = subsequence.split('');
  const searchingStringLetters = searchingString.split('');
  searchingStringLetters.forEach((letter) => {
    const findedIndex = subsequenceLetters.indexOf(letter);
    if (findedIndex !== -1) {
      result += letter;
      subsequenceLetters = subsequenceLetters.slice(findedIndex + 1);
    }
  });
  return result;
}
