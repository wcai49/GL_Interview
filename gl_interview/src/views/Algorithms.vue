<template>
  <div class="algorithms-page layout-center">
    <div class="algorithms-playground">
      <div class="algorithms-recent-hard">
        Findout whether the LinkedList is a looped one or not. This is easy. Try
        to make it runnable in your project. So you will have to write a
        linkedlist class, node class etc.,
      </div>
      <div class="playground-container">
        <div class="playground-left">CODE AREA</div>
        <div class="playground-right">
          <div class="playground-right-figure"></div>
          <div class="playground-right-input">
            <div>List:</div>
            <textarea
              class="playground-input-textarea"
              :value="input.head"
            ></textarea>
            <div>Loop Index:</div>
            <textarea
              class="playground-input-textarea"
              v-model="input.pos"
            ></textarea>
          </div>
          <div class="playground-command-area">
            <div class="playground-right-result">Result: <p>{{ result }}</p></div>
            <div class="playground-run-btn" @click="createList(input.head)">
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
</template>

<script>
import ListNode from "../classes/ListNode.js";
// import LinkedList from "../classes/LinkedList.js";

export default {
  name: "Algorithms",
  components: {},
  data() {
    return {
      input: {
        head: [1, 2, 3, 4, 5, 6, 7],
        pos: 2,
      },
      result: null,
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
    createList(head) {
      if(head.length < this.input.pos){
        this.result = 'error';
        return;
      }
      let startNode = new ListNode(-1);
      let helper = startNode;

      for (let i = 0; i < head.length; i++) {
        let nextNode = new ListNode(head[i]);
        helper.next = nextNode;
        helper = nextNode;
      }

      if (this.input.pos >= 0) {
        console.log('hi');
        let index = this.input.pos;
        let indexNode;
        while (index >= 0) {
          indexNode = startNode.next;
          index--;
        }
        helper.next = indexNode;
      }
      this.checkLoop(startNode.next);
    },
    checkLoop(node) {
      let slow = node;
      let fast = node;

      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {
          this.result = true;
          return;
        }
      }
      this.result = false;
      return;
    },
  },
};
</script>
