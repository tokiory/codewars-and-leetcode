export default function binarySearch(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > target) {
      right = middle - 1;
      continue;
    }

    left = middle + 1;
  }

  return -1;
}
