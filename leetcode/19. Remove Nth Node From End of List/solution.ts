import { ListNode } from "../../utils/ListNode";

export default function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const linkedNodeList: ListNode[] = [];

  let currentHead = head as ListNode;
  while(currentHead) {
    linkedNodeList.push(currentHead);
    currentHead = currentHead.next as ListNode;
  }

  if (linkedNodeList.length <= 1 || n > linkedNodeList.length) {
    return null;
  }

  const indexBeforeDeletedNode = -(n + 1);
  const nodeBeforeDeleted = linkedNodeList.at(indexBeforeDeletedNode);

  if (!nodeBeforeDeleted) {
    return linkedNodeList.at(-n + 1) as ListNode;
  }
  nodeBeforeDeleted.next = indexBeforeDeletedNode === -2 ? null : linkedNodeList.at(-n + 1) as ListNode;
  return head as ListNode;
};