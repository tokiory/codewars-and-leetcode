export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function isPalindrome(head: ListNode | null): boolean {
  let stringNumber = "";
  let currentHead = head;

  while (currentHead) {
    stringNumber += currentHead.val;
    currentHead = currentHead.next;
  }

  return stringNumber === stringNumber.split("").reverse().join("");
};