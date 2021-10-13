<template>
  <div>
    <svg
      class="question-svg"
      xmlns="http://www.w3.org/2000/svg"
      :height="svgHeight + 'px'"
    >
      <g v-for="(item, index) in svgNodes" :key="index">
        <circle
          :cx="80 * index + svgGap"
          :cy="svgHeight / 2"
          r="30"
          style="fill-opacity: 0; stroke: rgb(54, 107, 250); stroke-width: 1.5"
        ></circle>
        <text
          :x="80 * index + svgGap - 4"
          :y="svgHeight / 2 + 3"
          font-size="16px"
          style="stroke: rgb(0, 0, 0); fill-opacity: 1"
        >
          {{ item.val }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import ListNode from "../classes/ListNode.js";
export default {
  name: "createSvg",
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
    node: {
      type: ListNode,
      default: null,
    },
  },
  watch: {
    node: function (newVal, oldVal) {
      console.log(oldVal);
      this.createListSvg(newVal);
    },
  },
  data() {
    return {
      svgHeight: 0,
      svgNodes: [],
      svgGap: 50,
    };
  },
  methods: {
    createListSvg(newVal) {
      // by default, we assume there is only one line of list node, so the height will be constant
      this.svgHeight = 176;
      let head = newVal;
      this.svgNodes = [];
      while (head) {
        this.svgNodes.push(head);
        head = head.next;
      }
    },
  },
};
</script>
