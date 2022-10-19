export default function isHappy(n: number): boolean {
  let previousSquaresList: number[] = [];
  let currentNumber = n;
  while (true) {
    const nString = currentNumber.toString();
    const square: number = nString.toString().split('').reduce((acc, item) => {
      return acc + Math.pow(+item, 2);
    }, 0);
    
    if (square === 1) {
      return true;
    }
    
    if (previousSquaresList.indexOf(square) !== -1) {
      return false;
    }
    previousSquaresList.push(square);
    currentNumber = square;
  }
};
