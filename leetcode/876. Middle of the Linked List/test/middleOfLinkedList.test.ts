import middleNode from "../solution";
import { arrayToListNode, listNodeToArray } from '../../../utils/ListNode';


function getResultArray(initialArray: number[]): number[] {
    const listNode = arrayToListNode(initialArray);
    const halfHead = middleNode(listNode);
    return listNodeToArray(halfHead);
}

describe('Middle of the linked list', () => {

  test('Simple array', () => {
    const TEST_ARRAY = [1,2,3,4,5];
    const resultArray = getResultArray(TEST_ARRAY);
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.slice(Math.floor(TEST_ARRAY.length / 2))
    );
  });

  test('Long array', () => {
    const longArray = Array.from({ length: 1000 }).map(() =>
      Math.ceil(Math.random() * 1000)
    );

    const resultArray = getResultArray(longArray);
    expect(resultArray).toStrictEqual(
      longArray.slice(Math.floor(longArray.length / 2))
    );
  });

  test('Empty array', () => {
    const TEST_INPUT = null;
    expect(middleNode(TEST_INPUT)).toBe(TEST_INPUT);
  });
});