import { ListNode } from "../../utils/ListNode";

export default function middleNode(head: ListNode | null): ListNode | null {
  let lengthOfListNode = 0;
  const headList: ListNode[] = [];
  let currentHead = head as ListNode;
  while (currentHead) {
    lengthOfListNode++;
    headList.push(currentHead);
    
    if (currentHead.next === null) {
      break;
    }

    currentHead = currentHead.next;
  }
  
  const halfIndex = Math.floor(lengthOfListNode / 2);
  return headList[halfIndex] ?? null;
};