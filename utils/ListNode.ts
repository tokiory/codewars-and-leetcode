export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type NodeHead = ListNode | null;
export function listNodeToArray(listNode: NodeHead): number[] {
    const result: number[] = [];

    let currentHead = listNode;
    while (currentHead) {
        result.push(currentHead.val);
        currentHead = currentHead.next;
    }

    return result;
}

export function arrayToListNode(arr: number[]): NodeHead {
    if (arr.length === 0) {
        return null;
    }

    const firstHead = new ListNode(arr[0]);
    let head = firstHead;

    for (let i = 1; i < arr.length; i++) {
        head.next = new ListNode(arr[i]);
        head = head.next;
    }

    return firstHead;
}