export default function permutations(str: string): string[] {

  // Basic case
  if (str.length <= 1) {
    return [str];
  }

  // Result array
  const result: string[] = [];

  // Iterating through each letter
  for (let i = 0; i < str.length; i++) {
    const otherLetters = str.slice(0, i) + str.slice(i + 1);

    // If letter was already in word - skip
    if (str.indexOf(str[i]) !== i) {
      continue;
    }

    // Finding subpermutations
    for (let permutation of permutations(otherLetters)) {
      result.push(str[i] + permutation);
    }
  }
	return result;
}