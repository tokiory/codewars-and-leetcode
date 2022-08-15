import { ListNode, isPalindrome } from "../solution";

function linkedListCreateHelper(n: number): ListNode {
  const numberPhrase = `${n}`;
  const splittedPhrase = numberPhrase.split("");
  let resultLinkedList: ListNode | null = null;
  let currentNode = null;

  if (/\D/.test(numberPhrase)) {
    throw new Error("Invalid number, there is letters");
  }

  for (let digit of splittedPhrase) {
    if (!currentNode) {
      resultLinkedList = new ListNode(Number(digit));
      currentNode = resultLinkedList;
      continue;
    }

    currentNode.next = new ListNode(Number(digit));
    currentNode = currentNode.next;
  }

  return resultLinkedList as ListNode;
}

describe("Testing palindrome linked list function", () => {

  test("Testing simple palindrome: 1221", () => {
    const palindromeLinkedList = linkedListCreateHelper(1221);
    expect(isPalindrome(palindromeLinkedList)).toBeTruthy();
  });

  test('Testing zero-palindrome: 0', () => {
    const palindromeLinkedList = linkedListCreateHelper(0);
    expect(isPalindrome(palindromeLinkedList)).toBeTruthy();
  });

  test('Not a palindrome number: 12', () => {
    const palindromeLinkedList = linkedListCreateHelper(12);
    expect(isPalindrome(palindromeLinkedList)).toBeFalsy();
  });

  test('Big palindrome number: 1450000000541', () => {
    const palindromeLinkedList = linkedListCreateHelper(1450000000541);
    expect(isPalindrome(palindromeLinkedList)).toBeTruthy();
  });
});
