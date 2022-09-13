/**
 * Searching for subsequence in strings
 * @param s First string for subsequence
 * @param t Second string for searching in subsequence
 * @returns If first is subsequence of the second string
 */
export default function isSubsequence(s: string, t: string): boolean {
  // Temporary string for slicing
  let stringForSearch: string = t;

  // Going throw the first string
  for (let letter of s.split('')) {
    // If letter was found in the second string (letter is subsequence of second string) - get index
    const foundIndex = stringForSearch.indexOf(letter);

    // If index wasn't found - return false
    if (foundIndex === -1) {
      return false;
    }

    // Slice second string for searching subsequence in the future
    stringForSearch = stringForSearch.slice(foundIndex + 1);
  }

  return true;
}
