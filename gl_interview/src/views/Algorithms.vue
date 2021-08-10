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
          <div class="playground-right-figure">
            <img class="playgroun-figure" src="/circularlinkedlist.png" />
          </div>
          <div class="playground-right-result">Result: {{ result }}</div>
        </div>
      </div>
    </div>
    <div class="algorithms-container">
      <div
        class="algorithms-categories"
        v-for="(item, index) of categories"
        :key="index"
      >
        <div class="algorithms-categories-title">{{ item.name }}</div>
        <img class="algorithms-categories-img" :src="item.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Algorithms",
  components: {},
  data() {
    return {
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
};
</script>
