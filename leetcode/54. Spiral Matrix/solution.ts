export default function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  while (matrix.length > 0) {
    result.push(
      ...popTop(matrix),
      ...popRight(matrix),
      ...popBottom(matrix),
      ...popLeft(matrix),
    );
  }
  
  return result;
};

function popTop(arr: number[][]): number[] {
  return arr?.shift() ?? [];
}

function popRight(arr: number[][]): number[] {
  const result: number[] = [];
  arr.forEach(row => {
    const popped = row.pop();
    
    if (popped) {
      result.push(popped);
    }
  });
  
  return result;
}

function popBottom(arr: number[][]): number[] {
  return arr?.pop()?.reverse() ?? [];
}

function popLeft(arr: number[][]): number[] {
  const result: number[] = [];
  arr.forEach(row => {
    const shifted = row.shift();
    
    if (shifted) {
      result.push(shifted);
    }
  });
  
  return result.reverse();
}