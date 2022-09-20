import TreeNode from "../../utils/BinaryTree";
export function mergeTrees(firstRoot: TreeNode | null, secondRoot: TreeNode | null): TreeNode | null {
  if (!firstRoot) {
    return secondRoot;
  }

  if (!secondRoot) {
    return firstRoot;
  }
  
  firstRoot.val += secondRoot.val;
  firstRoot.left = mergeTrees(firstRoot?.left, secondRoot?.left);
  firstRoot.right = mergeTrees(firstRoot?.right, secondRoot?.right);
  return firstRoot;
};