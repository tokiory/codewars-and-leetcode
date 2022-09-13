const MANTISSA_LENGTH = 6;
let memo: number[];

export function going(n: number): number {
  memo = [1];

  if (n <= 1) {
    return memo[0];
  }

  const finalFib = fibWithMemo(n);
  const fibSum = sumFibRange(n);
  return deleteMantissa((1 / finalFib) * fibSum, MANTISSA_LENGTH);
}

function deleteMantissa(int: number, mantissaLength: number): number {
  return parseFloat(int.toFixed(mantissaLength));
}

function sumFibRange(rangeLength: number): number {
  if (rangeLength <= 1) {
    return 1;
  }

  let sumOfFib = 0;

  for (let i = 1; i <= rangeLength; i++) {
    sumOfFib += fibWithMemo(i);
  }
  return sumOfFib;
}

function fibWithMemo(n: number): number {
  if (memo.length >= n) {
    return memo[n];
  }

  for (let i = 1; i <= n; i++) {
    memo.push(memo[i - 1] * i);
  }

  return memo[n];
}
