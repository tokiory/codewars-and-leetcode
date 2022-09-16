export default function lengthOfLongestSubstring(s: string): number {
  for (let i = new Set(s).size; i > 0; i--) {
    const substrings = getSubstrings(s, i);
    if (substrings.some(isCharactersUnique)) {
      return i;
    }
  }
    
  return 0;
};

export function getSubstrings(s: string, windowSize: number): string[] {
  if (windowSize > s.length || s.length === 0) {
    return [''];
  }

  const substrings = [];
  let currentWord = '';

  for (let i = 0; i < windowSize; i++) {
    currentWord += s[i];
  }

  substrings.push(currentWord);

  for (let i = windowSize; i < s.length; i++) {
    currentWord = currentWord.slice(1) + s[i];
    substrings.push(currentWord);
  }

  return substrings;
}

export function isCharactersUnique(s: string): boolean {
  const uniqueCharacters = new Set(s);
  return s.length === uniqueCharacters.size;
}
