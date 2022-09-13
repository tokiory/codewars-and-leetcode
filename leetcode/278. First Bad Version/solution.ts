/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

export default function (isBadVersion: any) {
  const binarySearch = function (n: number): number {
    if (!isBadVersion(n - 1)) {
      return n;
    }

    let half = Math.floor(n / 2);

    while (true) {
      if (isBadVersion(half)) {
        console.log(half, isBadVersion(half), isBadVersion(half - 1));
        if (!isBadVersion(half - 1)) {
          break;
        }
        half = Math.floor(half / 2);
        continue;
      }
      half = Math.floor((half / 2 < 1 ? half : half / 2) + half);
    }

    return half;
  };

  return binarySearch;
}
