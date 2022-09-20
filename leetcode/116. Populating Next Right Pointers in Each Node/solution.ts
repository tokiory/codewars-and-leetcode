import Node from "../../utils/BalancedBinaryTree";

export default function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }

  if (!(root.right && root.left)) {
    return root;
  }

  connectNodes(root.right, root.left);
  recursiveConnectNodes(root, root.left);
  recursiveConnectNodes(root, root.right);
  return null;
};

function recursiveConnectNodes(previousNode: Node, currentNode: Node | null): void {

}

function connectNodes(leftNode: Node, rightNode: Node): void {
  leftNode.next = rightNode;
}