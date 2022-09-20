export function spinWords(words: string): string {
  return words.split(' ').map(item => {
    if (item.length >= 5) {
      return reverseWord(item);
    }
    return item;
  }).join(' ');
}

function reverseWord(word: string): string {
  return word.split('').reverse().join('');
}