/**
 * Calculates pivot index of an array
 * @param nums Array of numbers
 * @returns Pivot index of array
 */
export default function pivotIndex(nums: number[]): number {
  const total = nums.reduce((acc, item) => acc + item);
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum === total - currentSum - nums[i]) {
      return i;
    }
    currentSum += nums[i];
  }

  return -1;
}
