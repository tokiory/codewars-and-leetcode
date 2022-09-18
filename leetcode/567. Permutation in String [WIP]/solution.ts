/**
 * Search for permutations in reference string
 * @param forPermutations String for permutations
 * @param reference String for search if permutations included in
 * @returns Is reference includes permutations of first string
 */
export function checkInclusion(forPermutations: string, reference: string) {
  const permutations = findPerms(forPermutations);
  return permutations.some(item => reference.indexOf(item) !== -1);
}


/**
 * Get permutations of string
 * @param str String for permutations
 * @returns Array with permutations of input string
 */
function findPerms(str: string): string[] {

  // Basic case
  if (str.length < 2) return [str];

  let result = [];

  for (let i = 0; i < str.length; i++) {

    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCharsPermuted = findPerms(remainingChars);

    for (let j = 0; j < remainingCharsPermuted.length; j++){

      const permutation = currentChar + remainingCharsPermuted[j]
      result.push(permutation)
    }
  }
  return (result);
}