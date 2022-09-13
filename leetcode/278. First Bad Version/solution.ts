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

    let bottom = 1, up = n;

    while (bottom <= up) {
      const half = Math.floor((bottom + up) / 2);
      if (isBadVersion(half)) {
        if (!isBadVersion(half - 1)) {
          return half;
        }
        up = half;
        continue;
      }
      bottom = half;
    }

    return -1;
  };

  return binarySearch;
}