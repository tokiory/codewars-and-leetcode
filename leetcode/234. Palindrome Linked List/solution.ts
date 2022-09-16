import { ListNode } from "../../utils/ListNode";

export function isPalindrome(head: ListNode | null): boolean {
  let stringNumber = '';
  let currentHead = head;

  while (currentHead) {
    stringNumber += currentHead.val;
    currentHead = currentHead.next;
  }

  return stringNumber === stringNumber.split('').reverse().join('');
}