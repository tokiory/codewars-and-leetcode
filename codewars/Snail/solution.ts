export default function snail(nums: number[][]): number[] {
  const result: number[] = [];
  while (nums.length) {
    result.push(
      ...getFirstRow(nums),
      ...getLastColumn(nums),
      ...getLastRow(nums),
      ...getFirstColumn(nums)
    );
  }

  return result;
}

function getFirstRow(nums: number[][]): number[] {
  return nums.shift() ?? [];
}

function getLastRow(nums: number[][]): number[] {
  return nums.pop()?.reverse() ?? [];
}

function getLastColumn(nums: number[][]): number[] {
  const result: number[] = []

  nums.forEach(row => {
    result.push(row.pop() ?? 0);
  });

  return result;
}

function getFirstColumn(nums: number[][]): number[] {
  const result: number[] = []

  nums.forEach(row => {
    result.push(row.shift() ?? 0);
  });

  return result.reverse();
}