export class G964 {
  public static digPow = (n: number, p: number) => {
    
    // Split numbers into string array
    const digits = String(n).split("");

    // Sum power of every single digit
    const sum = Array.from(digits).reduce((acc, iter) => {
      return acc + Math.pow(+iter, p++);
    }, 0);

    // If we don't have remainder of division - return sum divided by n
    return sum % n === 0 ? sum / n : -1;
  };
}
