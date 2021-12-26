class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // print BFS layer-by-layer
  printBFS() {
    let result = new Array();
    if (this == null) {
      return result;
    }
    let queue = new Array();
    queue.push(this);
    while (queue.length) {
      let length = queue.length;
      for (let i = 0; i < length; i++) {
        let curr = queue.shift();
        result.push(curr.value);
        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
      }
    }
    return result;
  }
  // print pre-order of the Binary Tree
  printPreOrder() {
    let result = new Array();
    if (this == null) {
      return result;
    }

    let stack = new Array();
    stack.push(this);
    while (stack.length) {
      let node = stack.pop();
      result.push(node.value);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
    return result;
  }

}

export default TreeNode;
