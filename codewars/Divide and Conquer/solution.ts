/**
 * Add numbers and substract string numbers
 * @param x Array of strings and numbers
 * @returns Sum of numbers - sum of string numbers
 */
function divCon(x: any[]): number {
    return x.reduce((acc, item) => {
      if (typeof item === 'number') {
        return acc + item;
      } else {
        return acc - +item;
      }
    }, 0);

}