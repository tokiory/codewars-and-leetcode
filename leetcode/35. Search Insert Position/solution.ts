type moduleSubstraction = number;
type index = number;
type ApproximatelyPair = [moduleSubstraction, index];

export default function searchInsert(nums: number[], target: number): number {
  let start = 0, end = nums.length - 1;
  let approximatelyPair: ApproximatelyPair = [NaN, 0];
  while (start <= end) {
    const half = Math.floor((start + end) / 2);

    if (nums[half] === target) {
      return half;
    }

    if (nums[half] > target) {
      end = half - 1;
    }

    if (nums[half] < target) {
      start = half + 1;
    }
    
    setApprox(approximatelyPair, nums[half], half, target);
  }

  return approximatelyPair[1];
}

function setApprox(approx: ApproximatelyPair, currentNumber: number, index: number, target: number): void {
  const newApproximation = currentNumber - target;
    if (isNaN(approx[0]) || Math.abs(approx[0]) > Math.abs(newApproximation)) {
      approx[0] = newApproximation;
      approx[1] = newApproximation >= 0 ? index : index + 1;
    }
}