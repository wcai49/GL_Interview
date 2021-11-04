class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
   // print pre-order of the Binary Tree
   printPreOrder() {
    let result = new Array();
    if(this == null){
      return result;
    }

    let stack = new Array();
    stack.push(this);
    while(stack.length){
      let node  = stack.pop();
      result.push(node.value);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
    return result;
  }

}

export default TreeNode;
