<template>
  <div class="index-self-page">
    <el-container>
      <el-header>
        <vheader></vheader>
      </el-header>
      <el-main>
        <div class="index-main-area"></div>
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
