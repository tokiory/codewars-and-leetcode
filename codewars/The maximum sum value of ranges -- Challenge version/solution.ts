export default function maxSum(arr: number[], range: [number, number][]): number {
  const sumList: number[] = [];
  range.forEach(currentRange => {
    sumList.push(arr.slice(currentRange[0], currentRange[1] + 1).reduce((acc, item) => acc + item, 0));
  });

  return Math.max(...sumList);
}