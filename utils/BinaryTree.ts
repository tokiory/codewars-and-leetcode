export default class BinaryTreeNode {
  val: number = 0;
  left: BinaryTreeNode | null = null;
  right: BinaryTreeNode | null = null;

  constructor(
    val: number,
    left?: BinaryTreeNode | null,
    right?: BinaryTreeNode | null
  );
  constructor(
    val: number,
    left: BinaryTreeNode | null,
    right: BinaryTreeNode | null
  );
  constructor(
    val?: number,
    left?: BinaryTreeNode | null,
    right?: BinaryTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function binaryTreeFromArray(arr: number[]) {
  const initialTreeNode = new BinaryTreeNode(arr[0]);
}