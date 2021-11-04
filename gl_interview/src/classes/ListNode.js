class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  printList() {
    let result = new Array();
    
    let node = this;
    while(node){
      result.push(node.val);
      node = node.next;
    }
    return result;
  }
}

export default ListNode;
