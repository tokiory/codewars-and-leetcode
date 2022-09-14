export default function reverseWords(s: string): string {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};