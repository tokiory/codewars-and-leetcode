/**
 * Function that calculates running sum of the array
 * @param nums Array of numbers to sum
 * @returns Reduced array of numbers
 */
function runningSum(nums: number[]): number[] {
  // Result array of running sum
  const result: number[] = [];

  // Sum of array
  nums.reduce((acc, item) => {
    // Every sum we push into new result array
    const sum = acc + item;
    result.push(sum);

    // Returning num for calculate next sum in the future
    return sum;
  }, 0);

  return result;
}

export default runningSum;
