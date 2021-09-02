<template>
  <div class="algorithms-page">
    <el-container>
      <el-header>
        <vheader :currentIndex="2"></vheader>
      </el-header>
      <el-main>
        <div class="algorithm-main-area">
          <div class="algorithms-playground">
            <div class="algorithms-recent-hard">
              Findout whether the LinkedList is a looped one or not. This is
              easy. Try to make it runnable in your project. So you will have to
              write a linkedlist class, node class etc.,
            </div>
            <div class="playground-container">
              <div class="playground-left">
                <textarea class="algorithm-code-input" id="algorithmFunction">
function checkLoop(head) {
let slow = head;
let fast = head;

while (fast !== null && fast.next !== null) {
  slow = slow.next;
  fast = fast.next.next;
  if (fast == slow) {
    return true;
  }
}
return false;
              }</textarea
                >
              </div>
              <div class="playground-right">
                <div class="playground-right-figure">
                  <div class="question-title">Problem:</div>
                  <div class="question-desc">
                    Given a Linked-List, it might or might not be a looped
                    Linked-List. For example, if it a looped one, the last node
                    of the list will randomly point to the previous node.
                    Provide a function, return boolean value for whether it is
                    looped or not.
                  </div>
                  <div class="question-desc">Example:</div>
                  <img src="/circularlinkedlist.png" />
                  <div class="question-desc">
                    result: true. Last node(4) points to previous node(2).
                  </div>
                </div>
                <div class="playground-right-input">
                  <div>Input:</div>
                  <textarea
                    class="playground-input-textarea"
                    v-model="input.value"
                  ></textarea>
                  <div>Type</div>
                  <select
                    class="playground-input-textarea"
                    v-model="input.type"
                  >
                    <option v-for="(item, index) in input.types" :key="index">
                      {{ item }}
                    </option>
                  </select>
                  <div>Loop</div>
                  <textarea
                    class="playground-input-textarea"
                    v-model="input.pos"
                  ></textarea>
                </div>
                <div class="playground-command-area">
                  <div class="playground-right-result">
                    Result:
                    <p>{{ result }}</p>
                  </div>
                  <div
                    class="playground-run-btn"
                    @click="createInput(input.value)"
                  >
                    Run
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="algorithms-container">
      <div
        class="algorithms-categories"
        v-for="(item, index) of categories"
        :key="index"
      >
        <div class="algorithms-categories-title">{{ item.name }}</div>
        <img class="algorithms-categories-img" :src="item.img" />
      </div>
    </div> -->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ListNode from "../classes/ListNode.js";
import TreeNode from "../classes/TreeNode.js";
import vheader from "../components/header.vue";
// import LinkedList from "../classes/LinkedList.js";

export default {
  name: "Algorithms",
  components: { vheader },
  data() {
    return {
      input: {
        value: "[3, 2, 0, 4]",
        pos: 1,
        type: "ListNode",
        types: ["ListNode", "TreeNode", "Default"],
      },
      result: null,
      myFunc: Function,
      categories: [
        {
          name: "Linked List",
          img: "./LinkedList_Entry.png",
        },
        {
          name: "Binary Tree",
          img: "./BinaryTree_Entry.png",
        },
        {
          name: "Double Pointers",
          img: "./DoublePointers_Entry.png",
        },
        {
          name: "Dynamic Programming",
          img: "./DynamicProgramming_Entry.png",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    createInput(value) {
      switch (this.input.type) {
        case "ListNode":
          this.createList(value);
          break;
        case "TreeNode":
          this.createTree(value);
          break;
        case "Default":
          this.codeInput(value);
          break;
      }
    },
    createList(head) {
      // first, we trans String to Array
      if (head[0] !== "[" || head[head.length - 1] !== "]") {
        this.result = "Invalid Input, please check before run.";
        return;
      }
      head = head.slice(0, head.length - 1);
      head = head.split(",");

      if (head.length < this.input.pos) {
        this.result = "error";
        return;
      }
      let startNode = new ListNode(-1);
      let helper = startNode;

      for (let i = 0; i < head.length; i++) {
        let nextNode = new ListNode(parseInt(head[i]));
        helper.next = nextNode;
        helper = nextNode;
      }

      if (this.input.pos >= 0) {
        let index = this.input.pos;
        let indexNode;
        while (index >= 0) {
          indexNode = startNode.next;
          index--;
        }
        helper.next = indexNode;
      }
      this.codeInput(startNode.next);
    },
    createTree(root) {
      if (root[0] !== "[" || root[root.length - 1] !== "]") {
        this.result = "Invalid Input, please check before run.";
        return;
      }
      root = root.slice(1, root.length - 1);
      root = root.split(",");

      if (root == []) {
        this.result = "Input array is empty.";
        return;
      }
      // so a array of [3, 2, 0, 4] is kinda like pre-order of a binary tree
      let nodeArray = new Array();
      for (let node of root) {
        let curr_node = node == 'null' ? null :  new TreeNode(parseInt(node));
        nodeArray.push(curr_node);
      }

      let queue = new Array();
      let input = nodeArray[0];
      queue.push(nodeArray.shift());
      
      while (queue.length && nodeArray.length) {
        let length = queue.length;

        for (let i = 0; i < length; i++) {
          let curr = queue.shift();
          if(curr == null){
            this.result = 'Your binary tree is not possible. Check please.'
          }
          if (nodeArray.length >= 2) {
            if(nodeArray[0] !== 'null'){
              curr.left = nodeArray[0];
              queue.push(nodeArray.shift());
            }
            else{
              nodeArray.shift();
            }
            if(nodeArray[0] !== 'null'){
              curr.right = nodeArray[0];
              queue.push(nodeArray.shift());
            }
            else{
              nodeArray.shift();
            }
            
          } 
                      // 如果只剩一个了
            else if (nodeArray.length == 1) {
            curr.left = nodeArray[0] == 'null' ? null : nodeArray.shift();
            break;
          }
        }
      }
      console.log(input);
    },

    // After dealing with the input, finally run the code from the user.
    codeInput(node) {
      let js = document.getElementById("algorithmFunction").value;
      eval("this.myFunc = " + js);
      this.result = this.myFunc(node);
    },
  },
};
</script>
