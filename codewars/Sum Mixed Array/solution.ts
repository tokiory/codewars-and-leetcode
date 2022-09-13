/**
 * Calculate sum of array
 * @param x Array of number and strings
 * @returns Sum of number and number-strings
 */
export function sumMix(x: any[]): number {
  const numberArr = Array.from(x).map((item) => +item);
  return numberArr.reduce((acc, item) => acc + item, 0);
}
