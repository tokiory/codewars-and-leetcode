/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    const temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }
}
