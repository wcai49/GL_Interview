<template>
  <div class="index-self-page">
    <el-container>
      <el-header>
        <vheader :currentIndex="0"></vheader>
      </el-header>
      <el-main>
        <div class="index-main-area">
          <iframe class="unity-demo-area" src="./unitydemo.html"></iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vheader from "../components/header.vue";
export default {
  name: "Index",
  components: { vheader },
  data() {
    return {};
  },
};
</script>
