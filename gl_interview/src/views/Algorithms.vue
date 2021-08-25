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
                <textarea class="algorithm-code-input"></textarea>
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
                </div>
                <div class="playground-right-input">
                  <div>Input:</div>
                  <textarea
                    class="playground-input-textarea"
                    :value="input.head"
                  ></textarea>
                  <div>Type</div>
                  <select
                    class="playground-input-textarea"
                    v-model="input.type"
                  ></select>
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
                    @click="createList(input.head)"
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
import vheader from "../components/header.vue";
// import LinkedList from "../classes/LinkedList.js";

export default {
  name: "Algorithms",
  components: { vheader },
  data() {
    return {
      input: {
        head: [1, 2, 3, 4, 5, 6, 7],
        pos: 2,
        type: ['ListNode', 'TreeNode', 'Default']
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
      if (head.length < this.input.pos) {
        this.result = "error";
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
        console.log("hi");
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
