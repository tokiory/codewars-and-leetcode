/**
 * Calculate digital root of a number
 * @param n Initial number
 * @returns Digital root of an parametr number
 */
export const digitalRoot = (n: number): number => {
  // Translate our number into string
  let stringNumber = String(n);

  // While length of the string is not equal 1
  while (stringNumber.length !== 1) {
    // Total sum of an subnumbers
    let sum = 0;

    // Splitting number into subnumbers and sum it
    stringNumber.split('').forEach((num) => {
      sum += +num;
    });

    // Return sum into string number variable
    stringNumber = String(sum);
  }

  return +stringNumber;
};
