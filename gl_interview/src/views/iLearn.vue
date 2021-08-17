<template>
  <div class="iLearn-page">
    <div
      class="problem-detail"
      :class="showDetail ? detail - show : detail - hide"
    >
      <div class="detail-title">{{ showProblem.title }}</div>
      <div class="detail-discription">{{ showProblem.discription }}</div>
      <div class="detail-reference">{{ showProblem.reference }}</div>
      <div class="solution"></div>
    </div>
    <div class="problems-list-container">
      <div
        v-for="(item, index) of problemList"
        :key="index"
        @click="problemDetail(index)"
        class="problem-each"
      >
        <div class="problem-title">{{ item.title }}</div>
        <div class="problem-date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import problemSet from "../problemSet/problem-set.json";
export default {
  name: "iLearn",
  components: {},
  data() {
    return {
      showDetail: false,
      problemList: [],
      showProblem: {},
    };
  },
  mounted() {
    this.problemList = problemSet;
  },
  methods: {
    problemDetail(index) {
      this.showDetail = true;
      this.showProblem = this.problemList[index];
    },
  },
};
</script>
