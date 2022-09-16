import { arrayToListNode, listNodeToArray } from '../ListNode';

describe('Testing listNode utils', () => {
  test('Array to ListNode and reverse', () => {
    const TEST_ARR = [1, 2, 3, 4, 5];
    const listNode = arrayToListNode(TEST_ARR);
    const reverseArray = listNodeToArray(listNode);
    expect(reverseArray).toStrictEqual(TEST_ARR);
  });

  test('Empty arrays and List Nodes', () => {
    expect(arrayToListNode([])).toBe(null);
    expect(listNodeToArray(null)).toStrictEqual([]);
  });
});
