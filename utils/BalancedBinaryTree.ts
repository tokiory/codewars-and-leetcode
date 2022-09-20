export default class BalancedBinaryTreeNode {
  val: number;
  left: BalancedBinaryTreeNode | null;
  right: BalancedBinaryTreeNode | null;
  next: BalancedBinaryTreeNode | null = null;
  constructor(val?: number, left?: BalancedBinaryTreeNode, right?: BalancedBinaryTreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}