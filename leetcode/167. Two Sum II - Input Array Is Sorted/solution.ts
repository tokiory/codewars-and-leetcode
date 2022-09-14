// Решение, которое было у пользователя okhadeanimesh
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/2573447/Python-Clean-Code
// Адаптировано на TypeScript. Изначально было на Python

export function twoSum(numbers: number[], target: number): number[] {
  let start = 0, end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    }
    
    if (numbers[start] + numbers[end] < target) {
      ++start;
      continue;
    }
    
    --end;
  }
  
  return [-1, -1];
};