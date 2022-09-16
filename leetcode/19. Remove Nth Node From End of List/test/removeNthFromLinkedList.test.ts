import removeNthFromEnd from "../solution";
import { arrayToListNode, listNodeToArray } from '../../../utils/ListNode';

function prepareResult(initialArray: number[], indexForDeletion: number): number[] {
  const listNode = arrayToListNode(initialArray);
  const resultListNode = removeNthFromEnd(listNode, indexForDeletion);
  return listNodeToArray(resultListNode);
}
describe('Remove Nth element from node list', () => {
  
  test('Remove seconds element from end of linked list', () => {
    const TEST_ARRAY = [1,2,3,4,5];
    const INDEX_FOR_DELETETION_FROM_END = 2;
    const resultArray = prepareResult(TEST_ARRAY, INDEX_FOR_DELETETION_FROM_END);
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.filter(
        (_, index) =>
          index !== TEST_ARRAY.length - INDEX_FOR_DELETETION_FROM_END
      )
    );
  });

  test('Array with one element', () => {
    const TEST_ARRAY = [1];
    const INDEX_FOR_DELETETION_FROM_END = 1;
    const resultArray = prepareResult(TEST_ARRAY, INDEX_FOR_DELETETION_FROM_END);
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.filter(
        (_, index) =>
          index !== TEST_ARRAY.length - INDEX_FOR_DELETETION_FROM_END
      )
    );
  });

  test('Array with two elements', () => {
    const TEST_ARRAY = [1, 2];
    const INDEX_FOR_DELETETION_FROM_END = 1;
    const resultArray = prepareResult(TEST_ARRAY, INDEX_FOR_DELETETION_FROM_END);
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.filter(
        (_, index) =>
          index !== TEST_ARRAY.length - INDEX_FOR_DELETETION_FROM_END
      )
    );
  });

  test('Deleting first element of array with length 2', () => {
    const TEST_ARRAY = [1, 2];
    const INDEX_FOR_DELETETION_FROM_END = 2;
    const resultArray = prepareResult(TEST_ARRAY, INDEX_FOR_DELETETION_FROM_END);
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.filter(
        (_, index) =>
          index !== TEST_ARRAY.length - INDEX_FOR_DELETETION_FROM_END
      )
    );
  });

  test('Removing element somewhere but not in start and end', () => {
    const TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const INDEX_FOR_DELETETION_FROM_END = 7;
    const resultArray = prepareResult(
      TEST_ARRAY,
      INDEX_FOR_DELETETION_FROM_END
    );
    expect(resultArray).toStrictEqual(
      TEST_ARRAY.filter(
        (_, index) =>
          index !== TEST_ARRAY.length - INDEX_FOR_DELETETION_FROM_END
      )
    );
  });
});