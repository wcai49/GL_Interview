<template>
  <div class="algorithms-page">
    <el-container class="gl-interview">
      <el-header height="48px">
        <vheader :currentIndex="2"></vheader>
      </el-header>
      <el-main>
        <div class="algorithm-main-area">
          <div class="algorithms-playground">
            <div class="algorithms-recent-hard">
              Algorithm is a lot of fun to play with. Click run and you will see
              SVG spawned(only for simple linked-list so far).
            </div>
            <div class="playground-container">
              <div class="playground-left">
                <codemirror
                  v-model="codeInputText"
                  :options="codemirrorOptions"
                ></codemirror>
              </div>
              <div class="playground-right">
                <div class="playground-right-figure">
                  <div class="question-title">Question:</div>
                  <textarea class="question-desc"> </textarea>
                  <div class="question-title">Figure:</div>
                  <create-svg :node="currentnode"> </create-svg>
                </div>
                <div class="playground-right-input">
                  <div>Input:</div>
                  <textarea
                    class="playground-input-textarea"
                    v-model="input.value"
                  ></textarea>
                  <div>Input Type</div>
                  <select
                    class="playground-input-textarea select"
                    v-model="input.type"
                  >
                    <option v-for="(item, index) in input.types" :key="index">
                      {{ item }}
                    </option>
                  </select>
                  <div>Output Type</div>
                  <select
                    class="playground-input-textarea select"
                    v-model="output.type"
                  >
                    <option v-for="(item, index) in output.types" :key="index">
                      {{ item }}
                    </option>
                  </select>
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
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ListNode from "../classes/ListNode.js";
import TreeNode from "../classes/TreeNode.js";
import vheader from "../components/header.vue";
import createSvg from "../components/createSvg.vue";
import { checkValid, stringToNumArray } from "../functions/array.js";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript.js";

export default {
  name: "Algorithms",
  components: { vheader, codemirror, createSvg },
  data() {
    return {
      codeInputText: "function myFunc(input){ \n \n}",
      codemirrorOptions: {
        lineNumbers: true,
        line: true,
        theme: "material",
        mode: "javascript",
      },
      input: {
        value: "[3, 2, 0, 4]",
        type: "ListNode",
        types: ["ListNode", "TreeNode", "Array", "String", "Number"],
      },
      output: {
        type: "ListNode",
        types: ["ListNode", "TreeNode", "Array", "String", "Number"],
      },
      currentnode: null,
      result: null,
      myFunc: Function,
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
        case "Array":
          this.createArray(value);
          break;
        case "String":
          this.codeInput(value);
          break;
        case "Number":
          this.codeInput(parseInt(value));
          break;
        default:
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
      head = head.slice(1, head.length - 1);
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
      this.currentnode = startNode.next;
      this.codeInput(startNode.next);
    },
    createTree(root) {
      if (root[0] !== "[" || root[root.length - 1] !== "]") {
        console.log("Invalid Input, please check before run.");
        return;
      }
      root = root.slice(1, root.length - 1);
      root = root.split(",");

      if (root == []) {
        return;
      }
      // let input = this.spawnTree(root);
      // so a array of [3, 2, 0, 4] is kinda like pre-order of a binary tree
      let nodeArray = new Array();
      for (let node of root) {
        let curr_node = node == "null" ? null : new TreeNode(parseInt(node));
        nodeArray.push(curr_node);
      }

      let queue = new Array();
      let input = nodeArray[0];
      queue.push(nodeArray.shift());

      while (queue.length && nodeArray.length) {
        let length = queue.length;

        for (let i = 0; i < length; i++) {
          let curr = queue.shift();
          if (curr == null) {
            this.result = "Your binary tree is not possible. Check please.";
          }
          if (nodeArray.length >= 2) {
            if (nodeArray[0] !== "null") {
              curr.left = nodeArray[0];
              queue.push(nodeArray.shift());
            } else {
              nodeArray.shift();
            }
            if (nodeArray[0] !== "null") {
              curr.right = nodeArray[0];
              queue.push(nodeArray.shift());
            } else {
              nodeArray.shift();
            }
          }
          // 如果只剩一个了
          else if (nodeArray.length == 1) {
            curr.left = nodeArray[0] == "null" ? null : nodeArray.shift();
            break;
          }
        }
      }
      this.codeInput(input);
    },
    // spawnTree(queue) {
    //   if (queue.length == 0) {
    //     return null;
    //   }
    //   let string = queue.shift();
    //   if (string == "null") {
    //     return null;
    //   }
    //   let node = new TreeNode(parseInt(string));
    //   node.left = this.spawnTree(queue);
    //   node.right = this.spawnTree(queue);
    //   console.log(node);
    //   return node;
    // },
    createArray(arr_str) {
      // judge if this is a closed array:
      // similar to leetcode question: () [] {}, we need to see whether [] is in pairs.

      // first, users might mis-type some extra blanks (spaces)
      arr_str = arr_str.replaceAll(" ", "");
      if (!checkValid(arr_str)) {
        this.result = "Please check your array, it is not closed.";
        return;
      }

      let input = stringToNumArray(arr_str);
      this.codeInput(input);
    },

    // After dealing with the input, finally run the code from the user.
    codeInput(input) {
      eval("this.myFunc = " + this.codeInputText);
      this.handleResult(this.myFunc(input));
    },
    handleResult(result) {
      switch (this.output.type) {
        case "ListNode": {
          this.result = result.printList();
          break;
        }
        case "TreeNode": {
          this.result = result.printBFS();
          break;
        }
        default: {
          this.result = result;
          break;
        }
      }
    },
    // process(arr, L, R) {
    //   if (L == R) {
    //     return;
    //   }
    //   let mid = Math.floor((R - L) / 2) + L;
    //   this.process(arr, L, mid);
    //   this.process(arr, mid + 1, R);
    //   this.merge(arr, L, mid, R);
    // },
    // merge(arr, L, M, R) {
    //   let result = new Array(R - L + 1);
    //   let index = 0;
    //   let p1 = L;
    //   let p2 = M + 1;
    //   while (p1 <= M && p2 <= R) {
    //     result[index++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
    //   }
    //   while (p1 <= M) {
    //     result[index++] = arr[p1++];
    //   }
    //   while (p2 <= R) {
    //     result[index++] = arr[p2++];
    //   }
    //   for (let i = 0; i < result.length; i++) {
    //     arr[L + i] = result[i];
    //   }
    // },
  },
};
</script>
